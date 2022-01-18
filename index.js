
////////////////////////////////// 
//       Application Data       //
//////////////////////////////////



const users = [
    {
        id: 5,
        name: 'RR',
        lastSeen: Date.UTC(2022, 0, 16, 08, 33, 30),
        profilePic:'images/contact0.png',
        responses : []
    }, 
    {
        id: 1,
        name:"Ashish Sharma",
        lastSeen: Date.UTC(2022, 0, 16, 21, 47),
        profilePic: 'images/contact1.png',
        responses :[
            "Sorry. I can't talk, I'm driving.",
            "Can I call you back?",
            "Now is still not a really good time. I'll get back to you.",
            "Talking to my boss at the moment.",
            "I've got a pretty bad headache. Can't really text at the moment.",
            "I got to run. I'll be away from my phone for a few hours."
        ]
    },
    {
        id: 2,
        name:"Dazzle Jam",
        lastSeen: Date.UTC(2022, 0, 16, 21, 29),
        profilePic: 'images/contact2.png',
        responses : [
            "I got to be honest with you. This won't work.",
            "I know I know. It's a lot to take in, but someday you'll figure it out.",
            "Why are you saying that? Isn't it clear where this is going?",
            "Listen. Just take some time and give yourself a break. ",
            "Maybe at a later time, things would be different.",
            "Anyways, I'm turning my phone off. See you later."
        ]
    },
    {
        id: 3,
        name:"Pavel Danilyuk",
        lastSeen: Date.UTC(2022, 0, 15, 11, 47),
        profilePic: 'images/contact3.png',
        responses : [
            "I'm binging netflix for the next week.",
            "I'm long overdue for a vacation.",
            "I need to turn the phone off so work doesn't bother me too. ",
            "So you won't be able to reach me on here. Starting from now!",
            "Ok. I know I said that. But if you show up with pizza, I'll let you in.",
            "No Pizza. No access."
        ]
    },
    {
        id: 4,
        name:"Cottonbro",
        lastSeen: Date.UTC(2022, 0, 15, 11, 47),
        profilePic: 'images/contact4.png',
        responses : [
            "Yo. Do me a solid. Don't text me for a few days. I'm going through some shit.",
            "But don't worry though. Things are good, just want to get away for a bit.",
            "I got a buddy down in florida who's inviting me for some surfing. I think I'mma go.",
            "I imagine I'll be gone for 2 weeks or so.",
            "Give your sister a hug for me.",
            "Aiight. I'm outie."
        ]
    }

]


const chats = [
    {
        id: 2,
        participants: [5,3],
        totalMessagesSent: 4,
        messages:[
            {   
                id: 'msg-2-4',
                chatId: 2,
                senderId: 5,
                recipientId: 2,
                body: 'get em tiger.',
                sentAtTime: Date.UTC(2022, 0, 16, 21, 32, 57),
                firstInGroup: true,
                lastInGroup: true
            },
            {   
                id: 'msg-2-3',
                chatId: 2,
                senderId: 2,
                recipientId: 5,
                body: 'I got a hot date brosky.',
                sentAtTime: Date.UTC(2022, 0, 16, 21, 31, 22),
                firstInGroup: true,
                lastInGroup: true
            },
            {   
                id: 'msg-2-2',
                chatId: 2,
                senderId: 5,
                recipientId: 2,
                body: 'What are you doing later?',
                sentAtTime: Date.UTC(2022, 0, 16, 21, 29, 19),
                firstInGroup: false,
                lastInGroup: true
            },
            {   
                id: 'msg-2-1',
                chatId: 2,
                senderId: 5,
                recipientId: 2,
                body: 'Yo',
                sentAtTime: Date.UTC(2022, 0, 16, 21, 29, 15),
                firstInGroup: true,
                lastInGroup: false
            }
        ]

    },
    {
        id: 4,
        participants: [1,5],
        totalMessagesSent: 7,
        messages:[
            {   
                id: 'msg-4-7',
                chatId: 4,
                senderId: 5,
                recipientId: 1,
                body: 'who you thinking?',
                sentAtTime: Date.UTC(2022, 0, 17, 15, 32, 57),
                firstInGroup: true,
                lastInGroup: true
            },
            {   
                id: 'msg-4-6',
                chatId: 4,
                senderId: 1,
                recipientId: 5,
                body: 'You inviting anyone else?',
                sentAtTime: Date.UTC(2022, 0, 17, 15, 22, 03),
                firstInGroup: false,
                lastInGroup: true
            },
            {   
                id: 'msg-4-5',
                chatId: 4,
                senderId: 1,
                recipientId: 5,
                body: 'stfu',
                sentAtTime: Date.UTC(2022, 0, 17, 15, 21, 53),
                firstInGroup: true,
                lastInGroup: false
            },
            {   
                id: 'msg-4-4',
                chatId: 4,
                senderId: 5,
                recipientId: 1,
                body: 'There\'s this asian spot I want to check out. It just opened a few weeks ago, but supposed to have really tasty dumplings. And they only cost $1.',
                sentAtTime: Date.UTC(2022, 0, 17, 15, 18, 41),
                firstInGroup: false,
                lastInGroup: true
            },
            {   
                id: 'msg-4-3',
                chatId: 4,
                senderId: 5,
                recipientId: 1,
                body: 'I finish work at 7 and can be downtown by 730.',
                sentAtTime: Date.UTC(2022, 0, 17, 15, 17, 34),
                firstInGroup: true,
                lastInGroup: false
            },
            {   
                id: 'msg-4-2',
                chatId: 4,
                senderId: 1,
                recipientId: 5,
                body: 'What time are you thinking?',
                sentAtTime: Date.UTC(2022, 0, 17, 15, 15, 19),
                firstInGroup: true,
                lastInGroup: true
            },
            {   
                id: 'msg-4-1',
                chatId: 4,
                senderId: 5,
                recipientId: 1,
                body: 'Wanna grab dinner later?',
                sentAtTime: Date.UTC(2022, 0, 17, 15, 14, 15),
                firstInGroup: true,
                lastInGroup: true
            }
        ]

    },
    {
        id: 3,
        participants: [5,4],
        totalMessagesSent: 2,
        messages: [
            {   
                id: 'msg-3-2',
                chatId: 3,
                senderId: 5,
                recipientId: 4,
                body: 'New phone. Who this?',
                sentAtTime: Date.UTC(2022, 0, 5, 14, 18, 11),
                firstInGroup: true,
                lastInGroup: true
            },
            {   
                id: 'msg-3-1',
                chatId: 3,
                senderId: 4,
                recipientId: 5,
                body: 'Hey Hey',
                sentAtTime: Date.UTC(2022, 0, 5, 14, 10, 46),
                firstInGroup: true,
                lastInGroup: true
            },
        ]

    },

    {
        id: 1,
        participants: [5,2],
        totalMessagesSent: 4,
        messages: [
            {   
                id: 'msg-1-1',
                chatId: 1,
                senderId: 5,
                recipientId: 2,
                body: 'K. Lemme know. If not I can grab it tomorrow morning. We should survive no?',
                sentAtTime: Date.UTC(2022, 0, 17, 11, 11, 16),
                firstInGroup: true,
                lastInGroup: true
            },
            {   
                id: 'msg-1-3',
                chatId: 1,
                senderId: 2,
                recipientId: 5,
                body: 'I\'ll text her. Thanks',
                sentAtTime: Date.UTC(2022, 0, 17, 11, 10, 26),
                firstInGroup: true,
                lastInGroup: true
            },
            {   
                id: 'msg-1-2',
                chatId: 1,
                senderId: 5,
                recipientId: 2,
                body: 'I\'m working a double shift today. What about Sammy?',
                sentAtTime: Date.UTC(2022, 0, 17, 11, 9, 59),
                firstInGroup: true,
                lastInGroup: true
            },
            {   
                id: 'msg-1-1',
                chatId: 1,
                senderId: 2,
                recipientId: 5,
                body: 'Hey. Can you stop by and pick up the laundry on your way home?',
                sentAtTime: Date.UTC(2022, 0, 17, 11, 5, 6),
                firstInGroup: true,
                lastInGroup: true
            },
        ]
    },
]


const currentUser = users.find(user => user.id === 5) // this can be jquery?



//////////////////////////////////// 
//        Data Manipulation       //
////////////////////////////////////

const addMessageToChat = (chatId, body, recipientId, senderId) => {
    const currentChat = $.grep(chats, function(chat){return chat.id == chatId})[0]
    //const currentChat = chats.find(chat => chat.id == chatId) // get current chat. Can be jquery?
    const lastMessage = currentChat.messages[0] // get the last message in chat

    const moreThanADay = new Date().getDate() - 1 >= new Date(lastMessage.sentAtTime).getDate() ? true : false


    const firstInGroup = lastMessage.senderId === senderId && !moreThanADay ? false : true // determines if css class firstInGroup needs to be added
    
    
    const lastInGroup = lastMessage.senderId === senderId || firstInGroup ? true : false // determines if css class lastInGroup needs to be added

    if(lastInGroup && !firstInGroup){ // determines if the css of previous message needs to change
        lastMessage.lastInGroup = false;
        removeLastInGroup(lastMessage.id);
    } 


    const timestamp = getUTCDate() // get timestamp for message sent
    currentChat.totalMessagesSent += 1 // add to count of all messages this chat has seen
    const msgId = `msg-${chatId}-${currentChat.totalMessagesSent}` // create the message id.
    const msg = { // create the message
        id: msgId, 
        chatId: chatId, 
        senderId: senderId, 
        recipientId:recipientId,
        body:body, 
        sentAtTime: timestamp,
        firstInGroup:firstInGroup,
        lastInGroup:lastInGroup
    }

    currentChat.messages.unshift(msg) // add message to top of array // can this be jquery?
    renderMessageToChat(msg)
    populateContacts(chats)
    generateResponse(recipientId, chatId)
}


// Maybe this also needs to be jquery? Sorting an array of objects by value
const sortChats = () => {
    chats.sort((c1, c2) => (c1.messages[0].sentAtTime < c2.messages[0].sentAtTime)? 1:(c1.messages[0].sentAtTime > c2.messages[0].sentAtTime)? -1 :0)
}

//////////////////////////// 
//        responses       //
////////////////////////////
let timer1, timer2, timer3, timer4

const generateResponse = (userId, chatId) => {
    
    switch (userId) {
        case 4:
            clearTimeout(timer4)
            timer4 = setTimeout(removeResponseAndSend.bind(null, userId, chatId), 5000)
            break;
        case 3:
            clearTimeout(timer3)
            timer3 = setTimeout(removeResponseAndSend.bind(null, userId, chatId), 5000)
            break
        case 2:
            clearTimeout(timer2)
            timer2 = setTimeout(removeResponseAndSend.bind(null, userId, chatId), 5000)
            break;
        default:
            clearTimeout(timer1)
            timer1 = setTimeout(removeResponseAndSend.bind(null, userId, chatId), 5000)
    }

}

const removeResponseAndSend = (userId, chatId) => {
    userId = parseInt(userId)
    chatId = parseInt(chatId)

    respondent = $.grep(users, function(u){return u.id === userId})[0]
    if (!respondent.responses.length){
        return
    }
    const reply = respondent.responses[0]
    respondent.responses.splice(0,1)
    
    addMessageToChat(chatId, reply, currentUser.id, respondent.id)

}



///////////////////////////// 
//        Components       //
/////////////////////////////

const ChatListContact = (chatId, contact, message, active) => {
    const snippet = message.body.length > 40 ? validator.escape(message.body.substring(0,40)) + ' ...' : validator.escape(message.body)
   
    return `<div id="chat-${chatId}" onclick="openChat(${chatId})" class="contact ${active ? 'active':''}">
      <img src ="${contact.profilePic}" class="profilePic"/> 
      <div class="contactBody">
        <h6 class="contactName">${contact.name}</h6>
        <span class="lastMessage">${snippet}</span>
      </div>
      <span class="lastMessageTime">${convertFromUTC(message.sentAtTime,'shortDate')}</span>
    </div>
    `
}

const ActiveContact = (contact) => {
    return `
        <div class="contact">
            <img src ="${contact.profilePic}" class="profilePic chat"/>
            <div class="contactBody">
                <h6 class="contactName">${contact.name}</h6>
                <span class="lastSeen">${convertFromUTC(contact.lastSeen)}</span>
            </div>
        </div>
   `
}

const Message = (msg) => {
    return `
        <div class="messageContainer">
            <div id = "${msg.id}" class="message ${msg.firstInGroup ? 'firstInGroup': ''} ${msg.lastInGroup ? 'lastInGroup': ''} ${msg.senderId === currentUser.id ? 'personalMessage': 'contactMessage'}">
                <div class='messageBody'>${validator.escape(msg.body)} </div>
                <div class="messageSpacer"></div>
                <div class="messageTime">${convertFromUTC(msg.sentAtTime, 'fullDate')}</div>
            </div>
        </div>
    `
}


/////////////////////////////////////////// 
//      DOM manipulation functions       //
///////////////////////////////////////////


const removeLastInGroup = (id) => {
    //console.log(`Component with id: ${id} needs to update`)

    $(`#${id}`).removeClass('lastInGroup')
    
    // remove lastInGroup class from this message.
}

const populateContacts = (chats) => {
    sortChats()
    let active = true // This is so that the latest chat is autoselected

    const currentContacts = $('#allContacts') // 
    let populatedHTML = '' // pull the existing html
    

    // redo this to jquery
    for(let chat of chats){
        const contact = users.find(u => u.id === chat.participants.find(p => p != currentUser.id)) // find contact who isn't current user
        const message = chat.messages[0] // get the last message
        c = ChatListContact(chat.id, contact, message, active) // render a chat contact component
        if(active){
            openChat(chat.id) 
            $('#allMessages').scrollTop($('#allMessages')[0].scrollHeight);
        }
        active = false // all subsequent chats will not be active
        populatedHTML += c // build the full inner div
    }


    currentContacts.html(populatedHTML)

}

const searchContacts = (chats) => {
    const currentContacts = $('#allContacts') // 
    let populatedHTML = '' // pull the existing html

    // redo this to jquery
    for(let chat of chats){
        const contact = users.find(u => u.id === chat.participants.find(p => p != currentUser.id)) // find contact who isn't current user
        const message = chat.messages[0] // get the last message
        c = ChatListContact(chat.id, contact, message, false) // render a chat contact component
        populatedHTML += c // build the full inner div
    }
    currentContacts.html(populatedHTML)

}



const openChat = (chatId) => {
    //const chat = chats.find(chat => chat.id === chatId) // Using jquery equivalent below
    const chat = $.grep(chats, function(chat){ return chat.id == chatId; })[0];
    
    //const contact = users.find(u => u.id === chat.participants.find(p => p != currentUser.id)) // find contact who isn't current user
    const contact = $.grep(users, function(u){ return u.id === $.grep(chat.participants, function(p){ return p !== currentUser.id})[0]})[0];
        
    $('#chatHeader').html(ActiveContact(contact))
    let messageHTML = ''
    $.each(chat.messages, function(index, value){
        messageHTML = Message(value) + messageHTML
    })

    const newMessage = $("#newMessage")
    newMessage.attr('data-chatTarget', chatId)
    newMessage.attr('data-recipient', contact.id)
    newMessage.val(sessionStorage.getItem(`chat${chatId}`))
    

    $('.active').removeClass('active') // remove active class from current active chat
    $(`#chat-${chat.id}`).addClass('active') // add active class to clicked on chat
    $('#allMessages').html(messageHTML) // populate all messages with 
    $('#allMessages').scrollTop($('#allMessages')[0].scrollHeight);
    newMessage.focus()
}

const renderMessageToChat = (msg) => {
    $('#allMessages').html($('#allMessages').html()+ Message(msg)) // add msg to bottom of chat
    $('#allMessages').scrollTop($('#allMessages')[0].scrollHeight); // scroll to the bottom
} 


//////////////////////////////// 
//       Time Functions       //
////////////////////////////////


const convertFromUTC = (utcDate, output) => {
    d = new Date(utcDate)
   // console.log(d)
    if (output == 'onlyTime'){
        return getTime(d)
    }
    else if(output == 'fullDate'){
        return getFullDate(d)
    }
    else if(output == 'shortDate'){
        return getShortDate(d)
    }
    else {
        return getRenderedFullDate(d)
    }
}


const getTime = (d) => {
    hours = d.getHours()
    minutes = d.getMinutes()
    ampm = hours >=12 ? 'PM' : 'AM'

    return `${hours > 12 ? hours - 12 : hours}:${minutes} ${ampm}`
}

const getFullDate = (d) => {
    const options = {month: 'short', day: 'numeric', hour:'numeric', minute:'numeric'}
    return d.toLocaleString('en-US', options)
}

const getShortDate = (d) => {
    today = new Date(getUTCDate())
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
}


const getUTCDate = () =>{
    let d = new Date()

    let utc = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds(), d.getUTCMilliseconds())
    //console.log(utc)
    return utc
}

const getRenderedFullDate = (d) => {
    today = new Date(getUTCDate())
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

}

//////////////////////// 
//       Events       //
////////////////////////

//const textarea = document.getElementById('newMessage');
const textarea = $('#newMessage')


const wrap = (s) => s.replace(/(?![^\n]{1,31}$)([^\n]{1,31})\s/g, '$1\n');

const adjustSize = () => {
  //const text = textarea.value;
  const text = textarea.val()
  const wrapped = wrap(text);
  const lines = wrapped.split(/\r\n|\r|\n/).length
  //textarea.rows = lines;
  textarea.attr('rows', lines)
}
const handleEnter = (evt) => {
    const chatId = textarea.attr('data-chatTarget')
    const recipient = textarea.attr('data-recipient')
    if(evt.keyCode == 13 && !evt.shiftKey){
        evt.preventDefault()
        addMessageToChat(chatId, textarea.val(), recipient, currentUser.id)
        textarea.val('')
        adjustSize()
    }

    sessionStorage.setItem(`chat${chatId}` , textarea.val())
}

//textarea.addEventListener('input', adjustSize);
textarea.on('input', adjustSize)
textarea.on('keydown', handleEnter)

populateContacts(chats)
$('#allMessages').scrollTop($('#allMessages')[0].scrollHeight);


const filterContacts = () => {
    let search = $('#contactSearch').val()
    if(search == '') {
        searchContacts(chats)
        return
    }
    contacts = $.grep(users, function(u){
        search = search.toLowerCase() 
        return u.name.toLowerCase().includes(search)
    })

    ids = []
    $.each(contacts, function(index, contact){
        if(contact.id !== 5) ids.push(contact.id)
    })
    const filteredChats = $.grep(chats, function(chat){
        let participant = $.grep(chat.participants, function(p){
            return p !== currentUser.id
        })[0]
        let x = $.inArray(participant, ids) > -1
        return x
    })
    searchContacts(filteredChats)
} 

$('#contactSearch').on('input', filterContacts)
