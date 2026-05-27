const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<p>Application submitted by: ${myInfo.get('first')} ${myInfo.get('last')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Phone: ${myInfo.get('phone')}</p>
<p>Business/Organization: ${myInfo.get('biz-name')}</p>
<p>Application submitted: ${myInfo.get('timestamp')}</>
`