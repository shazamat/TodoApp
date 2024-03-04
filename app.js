const App = {
    data() {
        return {
            placeholderString : 'Введите название заметок',
            title: 'Список заметок',
            inputValue: '',
            notes: []
        }
    },

    methods: {
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        removeNote(index){
            this.notes.splice(index, 1)
        }
    }

}



Vue.createApp(App).mount('#app')

