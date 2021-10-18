import CakeCard from "./CakeCard";

function CakeContainer({cakeList, handleCakeClick, handleEdit }) {
    return (
        <>
            {cakeList.map(cake => 
                <CakeCard
                    key={cake.flavor}
                    cakeObj={cake}
                    handleCakeClick={handleCakeClick}
                    handleEdit={handleEdit}
                />
            )}
        </>
    );
}

export default CakeContainer;