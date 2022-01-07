

const Datalist = () => {
    const array = [];

    for (let i = 50; i <= 300; i++) {
        array.push(i);
    }

    return (
        <>
            <select size="1" style={{ backgroundColor: 'transparent', border: '1px solid gray', borderRadius: '5px' }}>
                {array.map((n) => (<option key={n} value={n}>{n} cm</option>)
                )}
            </select>
        </>
    )
}

export default Datalist
