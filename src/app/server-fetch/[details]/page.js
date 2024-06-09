
async function fetchUserdetails(currentUserID){
   try{
    const apiResponse = await fetch(`https://dummyjson.com/users/${currentUserID}`);
    const result = await apiResponse.json();
    return result;

   }catch(error){
    throw new Error(error);
   }
}
export default async function UserDetails({params}){
    console.log(params);
    const UserfetchedDetails = await fetchUserdetails(params.details);

    return(
        <div flex items-center justify-center h-screen>
            <h1>Profile</h1>
            <p>{UserfetchedDetails?.firstName}{UserfetchedDetails?.lastName}</p>
            <p>Age: {UserfetchedDetails?.age}</p>
            <p>Contact: {UserfetchedDetails?.phone} / {UserfetchedDetails?.email}</p>
        </div>
    );
}