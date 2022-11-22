import Image from 'next/image';
import styles from './style.module.scss';
const Page = async () => {

    const getData = async () => {
        const res = await fetch('http://localhost:3005/user', {
            cache: "force-cache",
        });
        return res.json()
    }


    const data = await getData();

    // console.log('data....', data)


    return (
        <div>
            <h1>User Page</h1>
            <div>
                {data.map((e) => {
                    // console.log(e)
                    return (
                        <div className={styles.top}>
                            <div>
                                <img src={e.image} width={200} height={200} alt="userImage" />
                            </div>
                            <div className={styles.text}>
                                <h4>Name- {e.firstName} {e.lastName}</h4>
                                <h4>Email- {e.email}</h4>
                                <h4>Gender- {e.gender}</h4>
                                <h4>Contact Number: {e.contactNumber}</h4>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

export default Page;