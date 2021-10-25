import CakeCard from "./CakeCard";

function CakeContainer({cakeList, handleEdit }) {
    return (
        <>
            {cakeList.map(cake => 
                <CakeCard
                    key={cake.id}
                    cakeObj={cake}
                    handleEdit={handleEdit}
                />
            )}
        </>
    );
}

export default CakeContainer;