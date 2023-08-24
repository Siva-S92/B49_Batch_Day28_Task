<div className='make-group'>
    <div className='row border p-4'>

        <div className='col-lg-2 col-md-12 col-sm-12 d-flex justify-content-center'>
            <div style={{ width: "120px", height: '140px' }}>
                <img className='text-center' src='https://cdn.kobo.com/book-images/314ed62c-3bae-46f5-ad0a-c1034cc3f105/353/569/90/False/a-wolf-so-grim-and-mangy.jpg' alt="image isn't available" style={{ width: "100%", height: "100%" }} />
            </div>
        </div>


        <div className='col-lg-6 col-md-12 col-sm-12 text-center'>
            <h4>Title</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad beatae nihil unde vel aliquid quo praesentium corrupti saepe odit repellendus.</p>
            <p className='fw-bold'>sustainability</p>
        </div>


        <div className='col-lg-4 col-md-12 col-sm-12 text-center'>
            <form className='d-flex justify-content-center'>
                <label htmlFor="quantity" className='fw-bold'>Quantity: </label>
                <input type="number" id="quantity" name="quantity" min="1" max="100" defaultValue={price} onChange={quonchange} />
                <label htmlFor="price" className='fw-bold'>Price: </label>
                <input type="text" id="price" name="price" size="6" defaultValue={price} />
            </form>
            <button className='btn btn-info mt-5' type="button">remove</button>
        </div>


    </div>



    <div className="row border">
        <div className="col-sm-6 text-start w-50"><p >subtotal</p></div>
        <div className="col-sm-6 text-end w-50"><p id='subtotal'>0</p></div>
    </div>

    <div className="row border">
        <div className="col-sm-6 text-start w-50"><p>shopping</p></div>
        <div className="col-sm-6 text-end w-50"><p>free</p></div>
    </div>

    <div className="row border">
        <div className="col-sm-6 text-start w-50"><p>grandtotal</p></div>
        <div className="col-sm-6 text-end w-50"><p id='grandtotal'>0</p></div>
    </div>
</div>