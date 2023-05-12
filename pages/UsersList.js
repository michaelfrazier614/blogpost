import ShowUser from "./ShowUser";
function Userslist({users,onDelete,onEdit}){
    const renderedUsers=users.map((user)=>{
        return <ShowUser key={user.id} user={user} onDelete={onDelete} onEdit={onEdit}/>
    })
    return (
    
    <div>
     
        <div className="container">
        <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Sr#</th>
            <th scope="col">Email</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>{renderedUsers}</tbody>
      </table>

        </div>
    </div>)
}

export default Userslist;