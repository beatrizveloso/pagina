/*function calc(){
    let vlrcompra = parseFloat(document.getElementById("valor").value);
    let qtdparc = (document.getElementById('qtdparc').value);
    let valorparc;

    if (qtdparc ==0){
        document.getElementById('idvlrparc').value = 'selecione parcela';
        document.getElementById('idvlrparc').style.textAlign = 'center';
        document.getElementById('idvlrparc').style.backgroundColor = '#FF0000';
    }else if(qtdparc == 1){
        valorparc = document.getElementById('valor').value;
        document.getElementById('idvlrparc').value = valorparc;
        document.getElementById('idvlrparc').style.backgroundColor = '#FFB6C1';

    }
}*/
function calc(){
    let vlrcompra = parseFloat(document.getElementById("valor").value);
    let qtdparc = (document.getElementById('qtdparc').value);
    let valorparc;

if (qtdparc ==0){
    document.getElementById('idvlrparc').value = 'selecione parcela';
    document.getElementById('idvlrparc').style.textAlign = 'center';
    document.getElementById('idvlrparc').style.backgroundColor = '#FF0000'
}else if(qtdparc ==1){
    valorparc = document.getElementById('valor').value;
    document.getElementById('idvlrparc').value = valorparc;
    document.getElementById('idvlrparc').style.backgroundColor = '# FF86C1'
}else if (qtdparc ==2){
    valorparc = document.getElementById('idvlrparc').value;
    valorparc = (vlrcompra + (vlrcompra *1.03))/2;
    document.getElementById('idvlrparc').value = valorparc;
}else if (qtdparc ==3){
    valorparc = document.getElementById('idvlrparc').value;
    valorparc = (vlrcompra + (vlrcompra *1.07))/3;
    document.getElementById('idvlrparc').value = valorparc.toFixed(2);
}
}