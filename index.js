const textarea = document.getElementById('newMessage');

const wrap = (s) => s.replace(/(?![^\n]{1,31}$)([^\n]{1,31})\s/g, '$1\n');

const adjustSize = () => {
  const text = textarea.value;
  const wrapped = wrap(text);
  const lines = wrapped.split(/\r\n|\r|\n/).length
  textarea.rows = lines;
}
adjustSize()

textarea.addEventListener('input', adjustSize);


const users = [
    {
        id: 1,
        name: 'RR',
        lastActive: Date.UTC(2022, 0, 16, 08, 33, 30),
        profilePic:'images/contact0.png',
    }, 
    {
        id: 2,
        name:"Ashish Sharma",
        lastActive: Date.UTC(2022, 0, 16, 21, 47),
        profilePic: 'images/contact1.png'
    },
    {
        id: 2,
        name:"Dazzle Jam",
        lastActive: Date.UTC(2022, 0, 16, 21, 29),
        profilePic: 'images/contact2.png'
    },
    {
        id: 3,
        name:"Pavel Danilyuk",
        lastActive: Date.UTC(2022, 0, 15, 11, 47),
        profilePic: 'images/contact3.png'
    },
    {
        id: 4,
        name:"Cottonbro",
        lastActive: Date.UTC(2022, 0, 15, 11, 47),
        profilePic: 'images/contact4.png'
    }

]

const currentUser = users.find(user => user.id === 1) // this can be jquery?

const chats = [
    {
        id: 2,
        participants: [1,3],
        lastMessage: Date.UTC(2022, 0, 16, 21, 29)

    },
    {
        id: 4,
        participants: [1,5],
        lastMessage: Date.UTC(2022, 0, 5, 15, 21)

    },
    {
        id: 3,
        participants: [1,4],
        lastMessage: Date.UTC(2022, 0, 15, 10, 16)

    },

    {
        id: 1,
        participants: [1,2],
        lastMessage: Date.UTC(2022, 0, 16, 21, 47)
    },
]

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

    let utc = Date.UTC(d.getUTCFullYear(), d.getUTCMonth(), d.getUTCDate(), d.getUTCHours(), d.getUTCMinutes())
    console.log(utc)
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



// Maybe this also needs to be jquery? Sorting an array of objects by value
const sortChats = () => {
    chats.sort((c1, c2) => (c1.lastMessage < c2.lastMessage)? 1:(c1.lastMessage > c2.lastMessage)? -1 :0)
}

