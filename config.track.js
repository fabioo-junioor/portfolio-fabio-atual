const token = 'm12XACF$Dc98OAhA6iES9b6MDZR3vulu';
const url = 'https://track-ease-backend.onrender.com/api/';

const sendTrackData = async (data) => {
    try {
        const payload = JSON.stringify(data);
        const blob = new Blob([payload], { type: 'application/json' });

        if(navigator.sendBeacon){
            const success = navigator.sendBeacon(url+'analysis/create', blob);
            if(success) return;

        };
        await fetch(url+'analysis/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: payload,
            keepalive: true
        }).catch(err => console.error('Fetch error:', err));

    } catch(error) {
        console.error('TrackEase sendData error: ', error);

    };
};
document.addEventListener('click', (event) => {
    try {
        let userUuid = localStorage.getItem('userUuid');
        if(!userUuid){
            userUuid = crypto.randomUUID();
            localStorage.setItem('userUuid', userUuid);
        
        };
        let element = event.target;
        while(element) {
            const classes = element.classList;
            for(let className of classes) {
                if(className.startsWith('te_')) {
                    const data = {
                        userToken: token,
                        uuidUser: userUuid,
                        className: className

                    };
                    sendTrackData(data);

                };
            };
            element = element.parentElement;

        };
    } catch(error){
        console.error('TrackEase click event error:', error);

    };
});

export default {};