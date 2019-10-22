var app = new Vue({
    el:'#todo',
   data: {
       todoTitle:'',
       todoId: '',
       editMode: false,
       todos:[
           {id:1,title:"First Todo",completed:false},
           {id:2,title:"Second Todo",completed:true},
           {id:3,title:"Third Todo",completed:false},
            {id:4,title:"Fourth Todo",completed:false},
            {id:5,title:"Fifth Todo",completed:false}
       ]
   },methods: {
       addnewtodo: function(){
           if(this.todoTitle == '' || this.todoTitle == undefined) {
               alert("Please enter the todo title");
               return;
           }
           this.todos.push({id:Math.floor((Math.random() * 100) + 1),title:this.todoTitle,completed:false});
           this.todoTitle = '';
       },edittodo: function(obj){
           this.editMode = true;
           this.todoTitle = obj.title;
           this.todoId = obj.id;
       },updatetodo: function() {
           var todoIndex = this.todos.findIndex(todo => (todo.id === this.todoId ));
           if(todoIndex !== -1) {
               this.todos[todoIndex].title = this.todoTitle;
           }
           this.todoTitle = '';
           this.editMode = false;
       },deletetodo: function(todoObj){
            var todoIndex = this.todos.findIndex(todo => (todo.id === todoObj.id ));
           if(todoIndex !== -1) { 
                this.todos.splice(todoIndex,1);
           }
       }
   } 
})
