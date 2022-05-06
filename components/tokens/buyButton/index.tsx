interface BuyButtonProps {
  disable: boolean
}

const BuyButton = (props: BuyButtonProps) => {

  function buyToken() {
    alert("Ok")
  }

  return (
    <div className="flex justify-center items-center">
      {
        props.disable ?
          <>
            <button
              className="flex justify-center items-center p-2 text-white bg-[#b95f71] rounded-xl m-5 min-h-[50px] text-center opacity-50"
              disabled
            >
              Confirm and Swap
            </button>
          </>
          :
          <>
            <button
              className="flex justify-center items-center p-2 text-white bg-[#b95f71] rounded-xl m-5 min-h-[50px] text-center"
              onClick={() => { buyToken() }}
            >
              Confirm and Swap
            </button>
          </>
      }
    </div>
  )
}

export default BuyButton