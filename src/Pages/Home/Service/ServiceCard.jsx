

const ServiceCard = ({service}) => {
    const {title,img,price,_id} = service;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{title}</h2>
                <h2 className="text-xl text-orange-500 font-bold">${price}</h2>
                <div className="card-actions">
                    <button className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
