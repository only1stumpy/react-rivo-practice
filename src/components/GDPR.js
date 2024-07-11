import '../style/style.css'


export default function GDPR({isClosed,setIsClosed}) {

    function closeGDPR() {
        setIsClosed(!isClosed);
    }

    return (
        isClosed && (
            <div className="gdpr-container">
                <div className="gdpr-first">
                    <h1>Файлы cookie и конфиденциальность</h1>
                    <p>Этот сайт использует файлы cookie, чтобы обеспечить вам наилучшие впечатления на нашем сайте</p>
                </div>
                <div className="gdpr-second">
                    <a href="/policy">Больше информации</a>
                    <h2 className="gdpr-button" onClick={closeGDPR}>ПРИНЯТЬ</h2>
                </div>
            </div>
        )
    );
}