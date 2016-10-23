export function saveToLocalStorage(name, data){
	try{
		localStorage.setItem(name, JSON.stringify(data));
	}catch(e){
		console.error(e);
		return;
	}
}

export function getFromLocalStorage(name){
	try{
		const data = localStorage.getItem(name);

		if (!data){
			return;
		}
	
		return JSON.parse(data);

	}catch(e){
		console.error(e);
		return;
	}
}