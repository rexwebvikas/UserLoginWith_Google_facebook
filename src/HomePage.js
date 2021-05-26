import React from 'react'

function HomePage({ final, show, click, setShow }) {
    console.log(show);
    return (
        <div>
            <>
                {!show && <div className="asdf">

                    {click === "true" ? <div>
                        <h1>Welcome {final.profileObj.name} </h1> 
                        <table className="showData">
                            <thead>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Google I'D</th>
                                <th>Account Type</th>
                                <th>Image</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{final.profileObj.name}</td>
                                    <td>{final.profileObj.email}</td>
                                    <td>{final.profileObj.googleId}</td>
                                    <td>{final.tokenObj.idpId}</td>
                                    <td><img className="image" src={final.profileObj.imageUrl} alt={final.profileObj.imageUrl} /></td>
                                </tr>
                            </tbody>
                        </table> </div> : ""
                    }
                    {
                        click === "false" ? <div> 
                            <h1>Welcome {final.name}</h1>
                            <table className="showData">
                            <thead>
                                <th>Name</th>
                                <th>Email</th>
                                <th>I'D</th>
                                <th>Account Type</th>
                                <th>Image</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{final.name}</td>
                                    <td>{final.email}</td>
                                    <td>{final.id}</td>
                                    <td>{final.graphDomain}</td>
                                    <td><img className="image" src={final.picture.data.url} alr={final.picture.data.url} /></td>
                                </tr>

                            </tbody>
                        </table>
                        </div>
                            : ""}
                    <button className="back" onClick={() => { setShow(pre => !pre) }}>Back</button>
                </div>}
            </>

        </div>
    )
}

export default HomePage
