const $ = _ => document.querySelector(_)

const canvas = document.createElement('canvas')
canvas.width = w = innerWidth
canvas.height = h = innerHeight
const c = canvas.getContext('2d')

$('#canvas').appendChild( canvas )

const parse = () => {
	const text = $('#textToParse').value.replace(/;/g,'\n').replace(/^\s*[\r\n]/gm,'').trim().split('\n')
	for(let i = 0; i < text.length; i++){
		const command = text[i].replace(/\s/g,'').match(/(.*)[\(|\=]/)
		if( !command || !(command[1] in c) )
			return alert(`Error on line ${i}`)
		try{
			eval(`c.${text[i]}`)
		}catch(e){
			return alert(`Error on line ${i} - ${e.message}`)
		}
	}
}

$('#textToParse').addEventListener('keydown', e => {
	switch(e.keyCode){
		case 13 :
			 parse()
			break
	}
})
