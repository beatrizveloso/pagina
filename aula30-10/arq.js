function checacor(){
    let azul = document.getElementById('az');
    if(azul.checked){
        document.getElementById('azul').style.backgroundColor = 'blue';
    }else{
        document.getElementById('azul').style.backgroundColor = 'white';
    }
    
    let vermelho = document.getElementById('ve');
    if(vermelho.checked){
        document.getElementById('vermelho').style.backgroundColor = 'red';
    }else{
        document.getElementById('vermelho').style.backgroundColor = 'white';
    }
    
    let amarelo = document.getElementById('am');
    if(amarelo.checked){
        document.getElementById('amarelo').style.backgroundColor = 'yellow';
    }else{
        document.getElementById('amarelo').style.backgroundColor = 'white';
    }
}

