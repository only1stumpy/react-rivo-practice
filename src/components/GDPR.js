export default function GDPR({isClosed,setIsClosed}) {

    function closeGDPR() {
        setIsClosed(!isClosed);
    }

    return (
        isClosed && (
            <div className="w-full fixed bottom-0 h-[66px] border border-[#212121] text-white flex justify-between px-[50px] bg-[#0C0C0C] z-50 md:h-[164px] md:flex-col md:py-[24px] md:px-[15px] vsm:h-[182px]">
                <div className="flex flex-row md:flex-col">
                    <h1 className="font-gilroy font-bold text-[18px] my-auto mr-[50px] md:m-0 md:mb-[8px]">Файлы cookie и конфиденциальность</h1>
                    <p className="font-gilroy font-medium text-[14px] text-[#B6B6B6] my-auto md:mb-[12px]">Этот сайт использует файлы cookie, чтобы обеспечить вам наилучшие впечатления на нашем сайте</p>
                </div>
                <div className="flex flex-row md:m-0 md:justify-end">
                    <a href="/policy" className="font-road font-normal text-[14px] my-auto mr-[30px] border-b border-white h-[20px]">Больше информации</a>
                    <h2 className="gdpr-button text-[#FDDD0A] font-road font-normal text-[14px] py-[11px] px-[20px] cursor-pointer border border-[#FDDD0A] my-auto transition ease-in duration-500 hover:bg-[#FDDD0A] hover:text-black hover:border-[#FDDD0A]" onClick={closeGDPR}>ПРИНЯТЬ</h2>
                </div>
            </div>
        )
    );
}