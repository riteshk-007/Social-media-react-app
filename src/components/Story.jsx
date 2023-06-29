
function Story() {
    const image = [
        {
            id: 682699,
            name: 'Henrietta',
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 655233,
            name: 'Fanny',
            img: "https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 159515,
            name: 'Luis',
            img: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 915023,
            name: 'Rose',
            img: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 530083,
            name: 'Lily',
            img: "https://images.unsplash.com/photo-1526313199968-70e399ffe791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 994383,
            name: 'Herbert',
            img: "https://images.unsplash.com/photo-1630945386735-372fbe731e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 475724,
            name: 'Alvin',
            img: "https://images.unsplash.com/photo-1571901205848-96622809cf6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 733504,
            name: 'Adrian',
            img: "https://images.unsplash.com/photo-1616356257367-9cd4bf56a45e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        },
        {
            id: 927973,
            name: 'Owen',
            img: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2111&q=80"
        },
    ]

    return (
        <div className="w-full lg:w-4/5 py-1 flex items-start overflow-x-hidden overflow-auto ">

            {
                image.map((item) => {
                    return <span className="flex text-center justify-center flex-col mx-1 lg:mx-3 my-1" key={item.id}>
                        <img src={item.img} alt="story" className="w-10 h-10 lg:w-14 lg:h-14 rounded-2xl overflow-hidden object-cover border border-yellow-400 cursor-pointer shadow shadow-slate-400" />
                        <h5 className="text-xs text-gray-200 font-semibold my-2">{item.name}</h5>
                    </span>
                })
            }



        </div>
    )
}

export default Story
