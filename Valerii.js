/* 0. Создать функицю, которая принимает строку селектор и возвращает:
    	 - undefined - если ничего не найдено
    	 - найденную ноду - если она одна
    	 - массив нод - если их несколько
    	 - если в функцию передать ноду, функция возвращает ее тип (Node, Text, Comment etc)
*/
function finder ( selector ) {
	if ( typeof selector === 'string' ) {
		var res = document.querySelectorAll ( selector )
		if ( res.length == 0 )
			return undefined;
		else if ( res.length == 1 )
			return res[0];
		else if ( res.length > 1 ) {
			var arrOfNodes = [];
			for (var i = 0, len = res.length; i < len; i++)
				arrOfNodes.push( res[i] );
			return arrOfNodes;
		}
	}
	else if ( selector.nodeType ) {
		alert ( 'selector instanceof NodeList');
		var listTypes = {	1: 'ELEMENT_NODE',
			2: 'ATTRIBUTE_NODE',
			3: 'TEXT_NODE',
			4: 'CDATA_SECTION_NODE',
			5: 'ENTITY_REFERENCE_NODE',
			6: 'ENTITY_NODE',
			7: 'PROCESSING_INSTRUCTION_NODE',
			8: 'COMMENT_NODE',
			9: 'DOCUMENT_NODE',
			10: 'DOCUMENT_TYPE_NODE',
			11: 'DOCUMENT_FRAGMENT_NODE',
			12: 'NOTATION_NODE'
		}
		return listTypes[ selector.nodeType ];
	}
	else 
		return 'Unexpected input value! =)'
}

/* 1. Создать функцию, которая принимает строку селектор и возвращает:
         - undefined - если ничего не найдено
    	 - найденную ноду - если она одна
    	 - первую найденную ноду - если их несколько
*/
function finder ( selector ) {
	var res = document.querySelector ( selector );
	if (res === null)
		return undefined;
	else
		return res;	
}

/* 2. Создать функцию аналог функции DOM insertBefore, но вставляет не до, а после указанного элемента.
var insertedElement = parentElement.insertBefore(newElement, referenceElement);
*/

function insertAfter (newElement, referenceElement) {
	var parentNode = referenceElement.parentElement;
	var nextNode = referenceElement.nextSibling;
	
	if (nextNode === null) {
		parentNode.appendChild (newElement);
	}
	else if (nextNode) {
		 parentNode.insertBefore (newElement, nextNode);
	}
}


/*3. Создать функцию, которая выдает значение атрибута или ставит его значение.
    	 
    	 Чтение.
    	 Что имеется в виду - Допустим есть элемент:
    	    <titanic style="float:none"></titanic>
    	    Если передать в функцию 'style' - она должна выдать "float:none"
    	    <ninja color="black" visibility="hidden"></ninja>
    	    Если передать в функцию 'color' - она должна выдать "black"
    	    
    	 Установка.
         Что имеется в виду - Допустим есть элемент:
            <lego></lego>
            Если передать в функцию два параметра - атрибут и значение, то нода должна выглядеть
            <lego style="display:block"></lego>
            Если значение этого атрибута уже задано, устанавливается новое значение.
    	    Было:
    	    <chucknorris speed="5"></chucknorris>
    	    После вызова функции с передачей атрибута и значения (speed Infinity):
    	    <chucknorris speed="Infinity"></chucknorris>
*/

HTMLElement.prototype.attributeOfNode = function () {
	var nod = this;
	if ( arguments.length === 1 && typeof arguments[0] === 'string' ) {
		if ( this.hasAttribute (arguments[0]) ) {
			alert ( this.getAttribute (arguments[0]) )
			//alert ( `${arguments[0]}:${this.getAttribute (arguments[0])}` );
		}
		else
			alert ('Attribute is absent in node. Try add value.');
	}
	else if ( arguments.length === 2 && typeof arguments[0] === 'string' && (typeof arguments[1] === 'string' || typeof arguments[1] === 'number' )) {
		this.setAttribute ( arguments[0], arguments[1] );
	}
	else {
		alert ('Incorrect number or type(s) of input value(s)!');
	}
}
// USAGE
// document.body.attributeOfNode('style')
// document.body.attributeOfNode('style', 'background-color:yellow')
// document.getElementsByTagName('titanic')[0].attributOfNode('style');
// document.getElementsByTagName('ninja')[0].attributOfNode('color');
// document.getElementsByTagName('lego')[0].attributOfNode('style', 'display:block');
// document.getElementsByTagName('chucknorris')[0].attributOfNode('speed', 'Infinity');



/* 4. С помощью JS создайте шахматное поле:
        - контейнер поля
        - 64 ребёнка (ячейки) элементы (проще позиционировать с помощью float)
        - ячейки раскрашены белым и черным
        - нужные атрибуты и стили задавайте с помощью JS
*/
<!DOCTYPE html>
<html>
<head>
</head>
<body>
	<script>
		var sizeField = 640;
		var sizeBorder = 10;
		var divMain = document.createElement('div');
		divMain.style.width  = sizeField + 'px';
		divMain.style.height = sizeField + 'px';
		divMain.style.border = sizeBorder + 'px double black';

		var divCell = document.createElement('div');
		divCell.style.width 	= sizeField/8 + 'px';
		divCell.style.height 	= sizeField/8 + 'px';
		divCell.style.cssFloat = 'left';
		//divCell.style.boxSizing = 'border-box';
		//divCell.style.margin = 0;

		for (var i = 0; i < 64; i++){
			var color = ( (i + parseInt(i/8)) % 2 === 1) ? 'black' : 'white';
			var divAttach = divCell.cloneNode(true);
			divAttach.style.backgroundColor = color;
			divMain.appendChild ( divAttach );

		}
		document.body.insertBefore( divMain, document.body.firstElementChild );
	</script>
</body>
</html>

