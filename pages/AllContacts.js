import ShowContact from "./ShowContact";
function AllContacts({contacts,onDelete,onEdit}){

const renderContact=contacts.map((contact)=>{
    return <ShowContact key={contact.id} contact={contact} onDelete={onDelete} onEdit={onEdit}/>
})

    return(<div>

        <div className="container">

        <table class="table table-bordered">
  <thead className="text-center">
    <tr>
      <th scope="col-1">Sr#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th class="col-6">Message</th>
      <th class="col-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    
  
  {renderContact}
    
  </tbody>
</table>

        </div>

    </div>)
}

export default AllContacts;