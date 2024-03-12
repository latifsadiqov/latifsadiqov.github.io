function uploadImage() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    if (!file) {
        alert('Please select a file.');
        return;
    }

    const url = 'https://api.backblazeb2.com/b2api/v2/b2_authorize_account';
    const accountID = '393e43975253';
    const applicationKeyID = '005393e439752530000000003';
    const applicationKey = 'K005fROro2navc9faymLx6xU9bSgoLs';

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': 'Basic ' + btoa(applicationKeyID + ':' + applicationKey),
        }
    })
    .then(response => response.json())
    .then(data => {
        const uploadUrl = data.apiUrl + '/b2api/v2/b2_get_upload_url';
        const authToken = data.authorizationToken;

        fetch(uploadUrl, {
            method: 'POST',
            headers: {
                'Authorization': authToken,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ bucketId: data.allowed.bucketId }),
        })
        .then(response => response.json())
        .then(data => {
            const uploadAuthToken = data.authorizationToken;
            const uploadUrl = data.uploadUrl;

            fetch(uploadUrl, {
                method: 'POST',
                headers: {
                    'Authorization': uploadAuthToken,
                    'X-Bz-File-Name': file.name,
                    'Content-Type': 'b2/x-auto',
                },
                body: file,
            })
            .then(response => response.json())
            .then(data => {
                document.getElementById('status').innerHTML = 'Image uploaded successfully!';
            })
            .catch(error => {
                console.error('Error uploading image:', error);
                document.getElementById('status').innerHTML = 'Error uploading image.';
            });
        })
        .catch(error => {
            console.error('Error getting upload URL:', error);
            document.getElementById('status').innerHTML = 'Error getting upload URL.';
        });
    })
    .catch(error => {
        console.error('Error authorizing account:', error);
        document.getElementById('status').innerHTML = 'Error authorizing account.';
    });
}
