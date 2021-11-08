/* Milestone 5
● Cancella messaggio: cliccando sul messaggio appare un menu a tendina che
permette di cancellare il messaggio selezionato
● Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti
*/
const app = new Vue ({
  el: "#root",
  data: {
    newMessage: "",
    counter: 0,
    contacts: [
    {
    name: 'Michele',
    avatar: '_1',
    visible: true,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    text: 'Hai portato a spasso il cane?',
    status: 'sent'
    },
    {
    date: '10/01/2020 15:50:00',
    text: 'Ricordati di dargli da mangiare',
    status: 'sent'
    },
    {
    date: '10/01/2020 16:15:22',
    text: 'Tutto fatto!',
    status: 'received'
    }
    ],
    },
    {
    name: 'Fabio',
    avatar: '_2',
    visible: true,
    messages: [
    {
    date: '20/03/2020 16:30:00',
    text: 'Ciao come stai?',
    status: 'sent'
    },
    {
    date: '20/03/2020 16:30:55',
    text: 'Bene grazie! Stasera ci vediamo?',
    status: 'received'
    },
    {
    date: '20/03/2020 16:35:00',
    text: 'Mi piacerebbe ma devo andare a fare la spesa.',
    status: 'sent'
    }
    ],
    },
    {
    name: 'Samuele',
    avatar: '_3',
    visible: true,
    messages: [
    {
    date: '28/03/2020 10:10:40',
    text: 'La Marianna va in campagna',
    status: 'received'
    },
    {
    date: '28/03/2020 10:20:10',
    text: 'Sicuro di non aver sbagliato chat?',
    status: 'sent'
    },
    {
    date: '28/03/2020 16:15:22',
    text: 'Ah scusa!',
    status: 'received'
    }
    ],
    },
    {
    name: 'Luisa',
    avatar: '_4',
    visible: true,
    messages: [
    {
    date: '10/01/2020 15:30:55',
    text: 'Lo sai che ha aperto una nuova pizzeria?',
    status: 'sent'
    },
    {
    date: '10/01/2020 15:50:00',
    text: 'Si, ma preferirei andare al cinema',
    status: 'received'
    }
    ],
    },
    ],
    respose: false,
    searchNames: "",
    userActive: "userActive",
    date: dayjs().second(1).format('DD/MM/YYYY HH:mm:ss'),
    dateResponse: dayjs().second(2).format('DD/MM/YYYY HH:mm:ss')

    //showSendedMenu: false,
         
      },
  methods: {
    changeChat(i) {
       if (i < this.contacts.length) {
        this.counter = i
        console.log(i);
        
      }
    },
    sendMessage() {
      this.contacts[this.counter].messages.push({
      date: this.date,
      status: "sent",
      text: this.newMessage
      });
      this.newMessage = ""
      setTimeout(this.showResponse, 1000)
      
    },
    showResponse() {
      this.contacts[this.counter].messages.push({
      date: this.dateResponse,
      status: "received",
      text: "Ok"
      });
     
    },
    searchLetters() {
      this.contacts.forEach((singleObject, index) => {
        //console.log(singleObject.name, index);
        const nameLower = singleObject.name.toLowerCase()
        //console.log(nameLower);


           if (!nameLower.includes(this.searchNames)) {
            singleObject.visible = false
           
       

      }
        
      });
    },
   sendedShowMessage(i) {
   
     console.log("cliccato sul messaggio");
 
     
       if( i < this.contacts[this.counter].messages.length) {
                 this.contacts[this.counter].messages[i].showSendedMenu = true
              }
              
              console.log(this.contacts[this.counter].messages);
    
      console.log(i);
       
    },

    deleteMessage (i) {
    //console.log("cliccato su delete");
  this.contacts[this.counter].messages.splice(i, 1);
 
 /*  console.log(this.contacts[this.counter].messages); */
}


   
  },
 /* mounted () {
  setTimeout(this.showResponse, 1000)


} */
 
    })