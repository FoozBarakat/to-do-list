var tasks = [];

$('.add-btn').on('click', function() {	
	var $toDo = $('.toDo-input').val();
	writeTask($toDo);
  $('.do').append('<input class="check-task" type="checkbox"/>' + $toDo);
	$toDo = $('.toDo-input').val("");

});

$('.done-btn').on('click', function() {
	var $cheked = $('.check-task:checked');

	if ()
	$('#done').append( $(".check-task:checked").val() );

	

	// for(var i = 0 ; i <tasks.length ; i++){
	// 	if($checked === 'on'){

	// 		tasks[i]["status"] = true;
	// 	}
	// 	if(tasks[i]["status"] === true){
	// 			$('#done').append($item);
	// 	}
	//}

});

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