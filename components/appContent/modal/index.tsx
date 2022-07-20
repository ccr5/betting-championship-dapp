interface ModalProps {
  handleModal: (value: boolean) => void
}

export function Modal(props: ModalProps) {
  return (
    <div className="absolute top-0 left-0 h-screen w-screen bg-gray-500 bg-opacity-30">
      <div className="flex justify-center items-center h-full w-full">
        <div className="
          shadow-2xl bg-paletteTwo shadow-gray-900 rounded-3xl
          desktop:w-1/3 laptop:w-1/2 tablet: w-1/2 mobile:w-4/5
        ">
          Oi
        </div>
      </div>
    </div>
  )
}