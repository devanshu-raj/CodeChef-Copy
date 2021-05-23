/*
 * (c) Devanshu Raj
 */

let styleSheet = `
	.copyBtn{
		border : 1px solid black;
		border-radius : 3px;
		background : #e6e6e6;
		color : #0f0f0f;
		padding : 5px;
		display : inline-block;
		margin-left : 40px;
		font-size : 0.8rem;
		font-weight : bold;	
	}
`;

let style = document.createElement('style');
style.type = "text/css";
style.innerHTML = styleSheet;
(document.head || document.documentElement).appendChild(style);

window.addEventListener('load', function(){

    function copyTest(test){

        let btn = document.createElement('button');
        btn.className = 'copyBtn'
        btn.innerHTML = 'Copy';
        btn.onclick = () => {
            window.navigator.clipboard.writeText(test.lastChild.innerText);  
        }

        let head = document.getElementById(test.previousElementSibling.id);
        if(!head){
        	test.insertBefore(document.createElement('br'), test.childNodes[0]);
            test.insertBefore(btn, test.childNodes[0])
        }

        if(head) head.appendChild(btn);
    }

    let tests  = document.getElementsByTagName('pre');

    for(let test of tests){
    	copyTest(test);
    }
    
});