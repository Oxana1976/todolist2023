//selection
const inputTask = document.forms["frmTODO"].task;
const btAdd = document.forms["frmTODO"].btAdd;
const taskList = document.getElementById("taskList");
const divNotification = documnet.getElementById("notification");

btAdd.onclick = function(){
	let task = inputTask.value;
	if(task!='' && task.length>=3){
		divNotification.innerHTML = '';
		
		taskList.innerHTML +='<li>'+task+'</li>'
	} else {
		divNotification.innerHTML = 'Veuillez entre une tâche d\'au mois 3 car'
		
	}
	
}