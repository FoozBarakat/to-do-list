var tasks = [];

$('.add-btn').on('click', function() {	
	var $toDo = $('.toDo-input').val();
	writeTask($toDo);
	var $check = $('<i class="fa fa-check-circle" id="check"></i>');
	var $remove = $('<i class="fa fa-minus-circle" id="remove"></i> ');
	//var $task = $('<label >' + $toDo +'<label>')
 	$toDo.append($check, $remove)
 	$('.do').append($toDo, '<br>')
	$toDo = $('.toDo-input').val("");

});

var check = $('<i class="fa fa-check-circle" id="check"> </i>').on('click',function(){
	var p = $(this).parent();
	p.fadeOut(function(){
		$('.done').append(p);
		p.fadeIn();
	})
	$(this).remove();
})


function addTask(task){
	tasks.push(task);
	//console.log(tasks);
}

function writeTask(newTask){
	var task = {};
	task.item = newTask;
	task.status = false;
	task.created_at = Date.now();
	addTask(task);
}