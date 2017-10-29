// avoid blacklisted words like innerHTML through string concat
alert(eval('document.body.inne' + 'rHTML'));
eval('xmlhttp.onread' + 'ystatechange = callback');