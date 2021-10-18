import CakeCard from "./CakeCard";

function CakeContainer({cakeList, handleCakeClick }) {
    return (
        <>
            {cakeList.map(cake => 
                <CakeCard
                    key={cake.flavor}
                    cakeObj={cake}
                    handleCakeClick={handleCakeClick}
                />
            )}
        </>
    );
}

export default CakeContainer;