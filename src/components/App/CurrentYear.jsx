// const [newDate, setNewDate] = useState('');
//     useEffect(() => {
//         let todayDate = new Date();
//         let todayYear = todayDate.getFullYear();
//         setNewDate([todayYear])
//     }, []);

const CurrentYear = () => {
    let todayDate = new Date();
    let todayYear = todayDate.getFullYear();
    return todayYear;
}

export default CurrentYear;