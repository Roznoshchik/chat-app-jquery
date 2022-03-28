
////////////////////////////////// 
//       Application Data       //
//////////////////////////////////

const chats = [];
const contacts = [];
const currentUser = {id: 1};


//////////////////////////////////// 
//        Data Manipulation       //
////////////////////////////////////

// These functions all manipulate the data above in some way

/*
This accepts a message and adds it to the relevant chat. It determines the 
messages css characteristics and then calls a function to render the message 
to the actual active chat. 
*/


const addMessageToChat = async (chatId, body, sender) => {
    sender.lastSeen = Date.now();

    fetch(`/users/${sender.id}/update`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({
            id: sender.id,
            lastSeen:sender.lastSeen
        })
    });

    const currentChat = $.grep(chats, function(chat){return chat.id == chatId})[0]
    const lastMessage = currentChat.messages[0] // get the last message in chat

    const res = await fetch(`/chats/${chatId}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify({body:body, sentAt: Date.now(), sender:sender.id})
    });

    const msg = await res.json()

    const moreThanADay = new Date().getDate() - 1 >= new Date(lastMessage.sentAt).getDate() ? true : false // determines if it's been over a day
    
    currentChat.messages.unshift(msg) // add message to top of array 
    if (lastMessage.senderId === sender.id && !moreThanADay) {
        const container = $(".messageContainer:last-of-type")
        const newMessage = Message(msg);
        container.append(newMessage);
        populateContacts(chats);
    } else {
        const newMessage = MessageContainer(Message(msg));
        renderMessageToChat(newMessage) 
        populateContacts(chats)
    }
    
    
    if (sender.id === currentUser.id) {
        const recipient = $.grep(currentChat.participants, function(user){return user.id !== currentUser.id})[0]
        generateResponse(recipient, chatId) // get the contact to respond. This wouldn't exist in an actual chat app.
    }
}


// sort the chats list so that the one with the most recent message is first in list
const sortChats = (chats) => {
    chats.sort((c1, c2) => (c1.messages[0].sentAt < c2.messages[0].sentAt)? 1:(c1.messages[0].sentAt > c2.messages[0].sentAt)? -1 :0)
}

//////////////////////////// 
//        responses       //
////////////////////////////

/*

These get the responses from the relevant contact. They are
behind a timeout so that they don't instantly reply in case 
your message is spread over a few messages. 

*/
let timer1, timer2, timer3, timer4

const generateResponse = (user, chatId) => {
    
    switch (user) {
        case 4:
            clearTimeout(timer4)
            timer4 = setTimeout(getResponse.bind(null, user, chatId), 5000)
            break;
        case 3:
            clearTimeout(timer3)
            timer3 = setTimeout(getResponse.bind(null, user, chatId), 5000)
            break
        case 2:
            clearTimeout(timer2)
            timer2 = setTimeout(getResponse.bind(null, user, chatId), 5000)
            break;
        default:
            clearTimeout(timer1)
            timer1 = setTimeout(getResponse.bind(null, user, chatId), 5000)
    }

}

// Removes the response from user.responses and adds it to the chat. 
const getResponse = async (user, chatId) => {

    const url = user.responseUrl;
    const res = await fetch(url);
    const data = await res.json();
    let reply; 
    if (data.quote) reply = data.quote;
    else if(data.activity) reply = data.activity;
    else if(data.result) reply = data.result.text;
    else {
        if (data.type === 'twopart') {
            const setup = data.setup;
            const delivery = data.delivery;
            addMessageToChat(chatId, setup, user)
            setTimeout(addMessageToChat.bind(null, chatId, delivery, user), 4000);
            return;
        } else reply = data.joke;
    }
    
    addMessageToChat(chatId, reply, user)
}



///////////////////////////// 
//        Components       //
/////////////////////////////


// renders all the chats in the sidebar. Can probably be renamed to conversation? or just chat?
const ChatListContact = (chatId, contact, message, active) => {
    const snippet = message.body.length > 40 ? validator.escape(message.body.substring(0,40)) + ' ...' : validator.escape(message.body)
   
    return `<div id="chat-${chatId}" onclick="openChat(${chatId})" class="contact ${active ? 'active':''}">
      <img src ="${contact.profilePic}" class="profilePic"/> 
      <div class="contactBody">
        <h6 class="contactName">${validator.escape(contact.name)}</h6>
        <span class="lastMessage">${snippet}</span>
      </div>
      <span class="lastMessageTime">${convertFromUTC(message.sentAt,'shortDate')}</span>
    </div>
    `
}

// The contact in the current active chat.
const ActiveContact = (contact) => {
    return `
        <div class="contact">
            <img src ="${contact.profilePic}" class="profilePic chat"/>
            <div class="contactBody">
                <h6 class="contactName">${validator.escape(contact.name)}</h6>
                <span class="lastSeen">${convertFromUTC(contact.lastSeen)}</span>
            </div>
        </div>
    `
}

// Each individual message bubble. 
const Message = (msg) => {
    return `
        <div id = "${msg.id}" class="message ${msg.senderId === currentUser.id ? 'personalMessage': 'contactMessage'}">
            <div class='messageBody'>${validator.escape(msg.body)} </div>
            <div class="messageSpacer"></div>
            <div class="messageTime">${convertFromUTC(msg.sentAt, 'fullDate')}</div>
        </div>
    `
}

const MessageContainer = (msgDiv) => {
    return `
        <div class="messageContainer">
           ${msgDiv}
        </div>
    `
}


//////////////////////////////// 
//       Time Functions       //
////////////////////////////////

/*
These functions are used to create the different time elements that the app uses. 
They render the time in the proper format depending on the conmponent being used. 
*/


// main function that takes a utc string and determines what it needs to be.
const convertFromUTC = (utcDate, output) => {

    d = new Date(utcDate)
    if (output == 'onlyTime'){ // 11:34 PM
        return getTime(d)
    }
    else if(output == 'fullDate'){ // jan 15, 4:37 PM
        return getFullDate(d)
    }
    else if(output == 'shortDate'){ //jan 15, 2022 or yesterday or 11:34 PM
        return getShortDate(d)
    }
    else {
        return getRenderedFullDate(d) // yesterdat at 11:47 PM
    }
}


const getTime = (d) => {
    hours = d.getHours()
    minutes = d.getMinutes()
    ampm = hours >=12 ? 'PM' : 'AM'

    return `${hours > 12 ? hours - 12 : hours}:${ minutes < 10 ? '0' + minutes: minutes } ${ampm}`
}

const getFullDate = (d) => {
    const options = {month: 'short', day: 'numeric', hour:'numeric', minute:'numeric'}
    return d.toLocaleString('en-US', options)
}

const getShortDate = (d) => {
    
    today = new Date(Date.now())
    if (d.getYear() == today.getYear() && d.getMonth() == today.getMonth()){
        if(d.getDate() == today.getDate()){
            return getTime(d)
        }
        else if (d.getDate() == today.getDate() - 1){
            return `Yesterday`
        }
        else {
            const options = {year: 'numeric', month: 'short', day: 'numeric'}
            return d.toLocaleString('en-US', options)
        }
    }
    else {
        return getFullDate(d)
    }
}

const getRenderedFullDate = (d) => {
    today = new Date(Date.now())
    if (d.getYear() == today.getYear() && d.getMonth() == today.getMonth()){
        if(d.getDate() == today.getDate()){
            return `Today at ${getTime(d)}`
        }
        else if (d.getDate() == today.getDate() - 1){
            return `Yesterday at ${getTime(d)}`
        }
        else {
            return getFullDate(d)
        }
    }
    else {
        return getFullDate(d)
    }

}


/////////////////////////////////////////// 
//      DOM manipulation functions       //
///////////////////////////////////////////

/*

These functions change the dom. They render things to the screen, manipulate css, etc.

*/


// renders all the chats to sidebar with chatListContact component.
const populateContacts = (chats, active=true) => {
    sortChats(chats)
    //let active = true // This is so that the latest chat is autoselected

    const currentContacts = $('#allContacts') // 
    let populatedHTML = '' // pull the existing html
    

    $.each(chats, function(index, chat){
        const contact = $.grep(chat.participants, function(p){ return p.id != currentUser.id})[0] // get chat participant id that isn't current user
        contacts.push(contact)
        const message = chat.messages[0] // get the last message in chat for showing snippet.
        c = ChatListContact(chat.id, contact, message, active) // render a chat contact component
        if(active){
            openChat(chat.id) 
            $('#allMessages').scrollTop($('#allMessages')[0].scrollHeight);
        }
        active = false // all subsequent chats will not be active
        populatedHTML += c // build the full inner div
    })

    currentContacts.html(populatedHTML)

}
// filters the contacts and populates with filtered list
const filterContacts = () => {
    let search = $('#contactSearch').val()
    if(search == '') {
        populateContacts(chats, false)
        return
    }
    recipients = $.grep(contacts, function(u){
        search = search.toLowerCase() 
        return u.name.toLowerCase().includes(search)
    })

    ids = []
    $.each(recipients, function(index, contact){
        ids.push(contact.id)
    })
    const filteredChats = $.grep(chats, function(chat){
        let participant = $.grep(chat.participants, function(p){
            return p.id !== currentUser.id
        })[0]
      

        let x = $.inArray(participant.id, ids) > -1
        return x
    })

    populateContacts(filteredChats, false)
} 

// renders the active chat to the screen
const openChat = async (chatId) => {
    //const chat = chats.find(chat => chat.id === chatId) // Using jquery equivalent below
    // const chat = $.grep(chats, function(chat){ return chat.id == chatId; })[0];
    
    const data = await fetch(`/chats/${chatId}?offset=0`);
    const chat = await data.json();

    const contact = $.grep(chat.participants, function(u){ return u.id !== currentUser.id})[0];
    
    $('#chatHeader').html(ActiveContact(contact));
    let messageHTML = $('<div>');
    let prevMsg = null;

    $.each(chat.messages.slice().reverse(), function(index, msg){

        const moreThanADay = new Date().getDate() - 1 >= new Date(prevMsg?.sentAt).getDate() ? true : false // determines if it's been over a day
        if (prevMsg && !moreThanADay && prevMsg.senderId === msg.senderId) {
            console.log(2, msg)
            const container = $(".messageContainer:last-of-type", messageHTML)
            const newMessage = Message(msg);
            container.append(newMessage);
        } else {
            console.log(1, msg)
            messageHTML.append(MessageContainer(Message(msg)))
        }
        prevMsg = msg;
    });

    const newMessage = $("#newMessage")
    newMessage.attr('data-chatTarget', chatId)
    newMessage.attr('data-recipient', contact.id)
    newMessage.val(sessionStorage.getItem(`chat${chatId}`))
    

    $('.active').removeClass('active') // remove active class from current active chat
    $(`#chat-${chat.id}`).addClass('active') // add active class to clicked on chat
    $('#allMessages').html(messageHTML.html()) // populate all messages with 
    $('#allMessages').scrollTop($('#allMessages')[0].scrollHeight);
    newMessage.focus()
}
// adds new message to dom
const renderMessageToChat = (msg) => {
    $('#allMessages').append(msg) // add msg to bottom of chat
    $('#allMessages').scrollTop($('#allMessages')[0].scrollHeight); // scroll to the bottom
} 

const textarea = $('#newMessage')

// changes the row attribute of the new message textarea
const setNewMessageRows = () => {
    const text = textarea.val() // value of text area
    const inputWidth = $('#newMessage').width()  // width of #newMessage input
    const avgWidth = 8 // avg char width for the chosen fonts is 8px. 

    const regex = /[\n]/g; // new line character regex
    let lines = text.split(regex) //split by new line character 
    let lineCount = 0 // set linecount at 0

    $.each(lines, function(index, line){ // iterate over every line
        let charLength = line.length // get amount of chars in line
        let numberOfLines = Math.floor(charLength / (inputWidth / avgWidth)) // determine if overflow and how many times
        if( numberOfLines > 0 ){ 
            lineCount += numberOfLines // add to counter
        }
    }) 

    let newLineCharacterCount = (text.match(regex) || []).length // get amount of new line characters
    lineCount += newLineCharacterCount // add new lines with overflow lines
  
    textarea.attr('rows', lineCount ? lineCount : 1) // set text area rows = to this value.
}


// sends the newMessage if enter is pressed and clears message field.
// based on https://stackoverflow.com/questions/6014702/how-do-i-detect-shiftenter-and-generate-a-new-line-in-textarea
const handleEnter = (evt) => {
    const chatId = textarea.attr('data-chatTarget')
    const recipient = textarea.attr('data-recipient')
    if(evt.keyCode == 13 && !evt.shiftKey){
        evt.preventDefault()
        addMessageToChat(chatId, textarea.val(), currentUser)
        textarea.val('')
        textarea.attr('rows', 1)
    }
    sessionStorage.setItem(`chat${chatId}` , textarea.val())
}

///////////////////////////////////// 
//       Events and listeners      //
/////////////////////////////////////

textarea.on('input', setNewMessageRows)
textarea.on('keydown', handleEnter)
$('#contactSearch').on('input', filterContacts)



////////////////////////// 
//       Start app      //
//////////////////////////

$(async () => {

    fetch('/chats')
    .then(data => data.json())
    .then(fetchedChats => {           
        chats.push(...fetchedChats);
        populateContacts(chats)
        $('#allMessages').scrollTop($('#allMessages')[0].scrollHeight); // scrolls to the bottom of the chat.
    })

})();

