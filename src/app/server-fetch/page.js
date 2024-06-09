import Link from "next/link";
async function fetchUsers(){
    try{
        const apiResponse = await fetch("https://dummyjson.com/users");
        const result = await apiResponse.json();
        return result.users;

    }catch(error){
        throw new Error(error);

    }
}
export default async function ServerFetchData(){
    const ListOfUsers = await fetchUsers();
    // console.log(ListOfUsers);
    return(
        <div className="flex items-center justify-center h-screen">
            <ul>
                {ListOfUsers && ListOfUsers.length > 0?

                    ListOfUsers.map(user=><li key={user.id} className="mt-5 cursor-pointer">
                        <Link href={`/server-fetch/${user.id}`}>
                        {user.firstName +" " + user.lastName}
                        </Link>
                        </li>)

                : null}
            </ul>
        </div>
    );
}