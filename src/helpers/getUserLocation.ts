export const getUserLocation = async():Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            ({ coords }) => {
                resolve([coords.longitude, coords.latitude]);
            },
            (err) => {
                alert('Geolocalization could not be gotten.');
                console.log(err);
                reject();
            }
        )
    });
}