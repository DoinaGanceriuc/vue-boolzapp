/* Milestone 4
● Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i
contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo
“mar” rimangono solo Marco e Martina) */

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
    newMessages: [],
    respose: false,
    searchNames: "",
    userActive: "userActive"
      
      },
  methods: {
    changeChat(i) {
       if (i < this.contacts.length) {
        this.counter = i
      }
    },
    sendMessage() {
      this.contacts[this.counter].messages.push({
      date: "10/01/2020 15:50:00",
      status: "sent",
      text: this.newMessage
      });
      this.newMessage = ""
      setTimeout(this.showResponse, 1000)
      
    },
    showResponse() {
      this.contacts[this.counter].messages.push({
      date: "10/01/2020 15:50:00",
      status: "received",
      text: "Ok"
      });
     
    },
    searchLetters() {
      this.contacts.forEach((singleObject, index) => {
        console.log(singleObject.name, index);
        const nameLower = singleObject.name.toLowerCase()
        console.log(nameLower);


           if (!nameLower.includes(this.searchNames)) {
            singleObject.visible = false
           
       

      }
        
      });
    },

    
  },
  /* mounted () {
  setTimeout(this.showResponse, 1000)


} */
 
    })