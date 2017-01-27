$(function () {
    var TaskView = dMVC.View.subClass({

        type: 'Task',

        init: function(opt) {

            this.done = opt.done;
            var span = new dMVC.View({
                htmlTag: 'span',
                html: ' X ',
                events: {
                    click: function() {
                        this.process('deleteTask');
                    }
                },
                context: this
            });
            this.add(span);

        }

    });

    var AppView = dMVC.View.subClass({

        type: 'App',

        commands: {
            "create": "createTask",
            "delete": "deleteTask"
        },

        events: {
            "submit": "formSubmit"
        },

        //constructor
        init: function(opt) {
            this.$inputField = this.$element.find("#add_task");

            //parent method call
            //this._super(opt);
        },

        deleteTask: function (command) {

            this.remove(command.id);

        },

        createTask: function (command) {
            var task = new TaskView({
                html: command.text,
                done: command.done,
                htmlTag: 'li'
            });
            task.cid = command.id;
            this.add(task);
        },

        formSubmit: function(evt) {
            this.process('createTask', this.$inputField.val());
            this.$inputField.val('');
            return false;
        }

    });

    var app = new AppView({el: '#app_form'});

    console.log('app view: ', app);


});



