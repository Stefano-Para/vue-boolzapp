// Milestone 1:
// Replica della grafica (immagine in allegato) con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse;
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto, ricavandoli dall'array contacts qui allegato

// Milestone 2:
// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all'interno del pannello della conversazione
// Click sul contatto mostra la conversazione del contatto cliccato

// qui viene letta da updated UNA SOLA VOLTA, la prima
// scrollToEnd = () => {    	
//     const chat = document.getElementById("endOfChat");
//     chat.scrollIntoView();
// };

var app = new Vue ({
    el: '#root',
    data: {
        contacts:[
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
                random: [
                    {
                        date: "",
                        text: "Hmm non mi fa ridere. Non sei simpatico.",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Non credo di aver capito",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ah ah ah",
                        status: "received"
                    }, 
                    {
                        date: "",
                        text: "Aspetta fammi pensare",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "E... e quindi?",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ma ci sarai te!",
                        status: "received"
                    }                   
                ]
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
                random: [
                    {
                        date: "",
                        text: "Hmm non mi fa ridere. Non sei simpatico.",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Non credo di aver capito",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ah ah ah",
                        status: "received"
                    }, 
                    {
                        date: "",
                        text: "Aspetta fammi pensare",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "E... e quindi?",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ma ci sarai te!",
                        status: "received"
                    }                   
                ]
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
                random: [
                    {
                        date: "",
                        text: "Hmm non mi fa ridere. Non sei simpatico.",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Non credo di aver capito",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ah ah ah",
                        status: "received"
                    }, 
                    {
                        date: "",
                        text: "Aspetta fammi pensare",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "E... e quindi?",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ma ci sarai te!",
                        status: "received"
                    }                   
                ]
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
                random: [
                    {
                        date: "",
                        text: "Hmm non mi fa ridere. Non sei simpatico.",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Non credo di aver capito",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ah ah ah",
                        status: "received"
                    }, 
                    {
                        date: "",
                        text: "Aspetta fammi pensare",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "E... e quindi?",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ma ci sarai te!",
                        status: "received"
                    }                   
                ]
            },

            {
                name: 'Scar',
                avatar: '_9',
                visible: true,
                messages: [
                    {
                        date: '21/05/2021 17:50:15',
                        text: 'Stasera vuoi crocchette o qualcosa \'altro?',
                        status: 'sent'
                    },

                    {
                        date: '21/05/2021 17:50:20',
                        text: 'Bistecca dai.. O una tartar di cerbiatto: decidi tu.',
                        status: 'received'
                    }
                ],
                random: [
                    {
                        date: "",
                        text: "Hmm non mi fa ridere. Non sei simpatico.",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Non credo di aver capito",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Ah ah ah",
                        status: "received"
                    }, 
                    {
                        date: "",
                        text: "Aspetta fammi pensare",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "E... e quindi?",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "ehi, sai che bruce ha appena cacato in bagno?",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "I love you momm-Aileen! 💗",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Steve mi ha appena rubato la cuccia. Fai qualcosa!",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "'Sta cosa poteva dirla giusto la Lucilla..😅😍",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "zio Armando!! 😍",
                        status: "received"
                    },
                    {
                        date: "",
                        text: "Zia Dali! Ciao JJ 😍;",
                        status: "received"
                    },
                    
                ]
            }
        ],
        
        activeIndex: 0,
        userMessage: null,
        userData: "",
        
        
    },
    methods: {
        getImage: function (contactIndex) {
            let imgUrl = this.contacts[contactIndex].avatar;
            // return "img/avatar" + imgUrl + ".jpg";
            // è uguale a fare 
            return `img/avatar${imgUrl}.jpg`
        },

        setActive: function (newIndex) {
            this.activeIndex = newIndex;
        },

        getLastMessageData: function (contactIndex) {
            const lastMessageIndex = this.contacts[contactIndex].messages.length -1;
            return this.contacts[contactIndex].messages[lastMessageIndex].date;
            // questo è l'ultimo oggetto di contacts -> messages -> { date - text - status } da cui prende DATE.
        },

        // questa function serve per prendere l'ultimo text (con messages.length - 1)
        getLastMessageText: function (contactIndex) {
            const lastMessageIndex = this.contacts[contactIndex].messages.length - 1;
            // cancellare
            // console.log("contact index: " + contactIndex)

            return this.contacts[contactIndex].messages[lastMessageIndex].text.substring(0, 30) + "...";            
        },

        // data atm
        sendMessage: function () {
            //utile per data in e out
        this.userData = dayjs().format('DD/MM/YY HH:mm:ss');
            
            // console.log("questa è randomAnswer = " + randomAnswer);
            // input dell'user in chat
            
            if (this.userMessage.length > 0) {
                
                this.contacts[this.activeIndex].messages.push(
                    {
                    date: this.userData,
                    text: this.userMessage,
                    status: 'sent'
                    }
                );
            } 
            
            // risposta bot
            this.userMessage = "";         
        },  // chiusura funzione sendMessage
        
        botAnswer: function () {
            // random creator answer  
            
            const singleRandomAnswer = this.contacts[this.activeIndex].random;

            const randomAnswer = singleRandomAnswer[Math.floor((Math.random() * ((singleRandomAnswer.length -1) - 0 + 1)) + 0)].text;

            let x = this.contacts[this.activeIndex].messages.push({date: dayjs().format('DD/MM/YY HH:mm:ss'),text: randomAnswer, status:'received'});
 
            // scroll at end
            // console.log(this.$refs["endOfChat"]);
            this.$refs["endOfChat"].scrollIntoView();

            return x;
        },

        botMessage: function() {
             let x = this
            setTimeout(function(){ 
                x.botAnswer();
            }, 1000);
        },

        search: function(event) {
            const searchInput = event.target.value;
            return this.contacts.map(contact => {
                if (contact.name.toLowerCase().includes(searchInput.toLowerCase())) {
                    contact.visible = true;
                }  else {
                    contact.visible = false;
                }
            })
        },
        // qui non funziona lo scrollToEnd (not defined????)
    //     scrollToEnd: function() {
    //         const chat = document.getElementById("singoloMessaggio");
    //         chat.scrollIntoView();
    //    },

        // alternative:
        // search: function (event) {
        //     for (var i = 0; i < this.contacts.length; i++){
        //         let included == this.contacts[i].name.toLowerCase().startsWith(event.target.value.toLowerCase());
        //         if (included == true) {
        //             this.contacts[i].visible = true;
        //         } else {
        //             this.contacts[i].visible = false;
        //         }
        //     }
        // }
        
    },
    // updated: function() {
    //     scrollToEnd();
    // },
    // // non funziona mounted
    // mounted: function() {
    //     scrollToEnd();
    // }
}
)