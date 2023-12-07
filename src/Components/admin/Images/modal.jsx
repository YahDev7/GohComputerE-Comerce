import { Button, Card } from "@tremor/react";

 const ModalImage = ({
    resetFormImage,
    toggleModalImage,
    SubmirFormImage,
    tags,
    removeTag,
    addTags,
    handleFileChangeImage,
    SelectImg,
    deleteImage
}) => {
 
return(
    <div id="defaultModal" className="fixed grid place-items-center inset-0 bg-black bg-opacity-50 top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100% - 1rem)]max-h-full">
        <input type="hidden" name="_id" id="_id" />
        <div className="relative bg-white rounded-lg p-2 w-[80%]">
            <button onClick={() => { resetFormImage(); toggleModalImage() }} className="absolute top-5 right-10 font-bold text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 rounded-lg text-sm px-2.5 py-2.5 mr-2 mb-2">X</button>


            <form className="w-full" onSubmit={(e) => { e.preventDefault(); SubmirFormImage(e) }}>

                <Button type="submit" className="mt-4 ml-3 mb-4 p-3 bg-[#03449d]" >Enviar</Button>


                <Card>
                    <div className="grid md:grid-cols-4 gap-4 -mx-3 mb-6">
                        <div className="w-full px-3">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="dni_ruc">Etiqueta</label>
                            <ul className="d-flex  flex-wrap">
                                {tags.map((tag, index) =>

                                    <li className="bg-blue-900 text-white m-2 p-2 rounded-lg d-flex" >
                                        <span className="me-2">{tag}</span>
                                        <span className="cursor-pointer rounded-xl bg-white text-blue-900 ps-2 pe-2 pb-1" onClick={() => removeTag(index)}>x</span>
                                    </li>
                                )}
                            </ul>
                            <div className="grid grid-cols-5">
                                <input onKeyUp={addTags}  type="text" className="col-start-1 col-end-5 appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white" name="label" id="label" placeholder="Tags" />
                            </div>

                        </div>

                        <div className="w-full px-3">
                            <div className="flex">
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="file">
                                    Imagen
                                </label>
                                <span className="pl-2 ">*</span>
                            </div>
                            <input type="file" onChange={(e) => handleFileChangeImage(e)} name="file" className=" relative col-start-1 col-end-4 m-0 block w-72 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 cursor-pointer file:cursor-pointer file:border-solid file:border-inherit file:bg-neutral-100 file:px-2.5 file:py-3.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none " />
                            {SelectImg &&

                                <div className="grid grid-cols-3 gap-4 pb-2  max-md:grid-cols-1 ">
                                    <img width="100px" src={SelectImg} alt="" />
                                    <button onClick={() => deleteImage()} type="button" className="h-[40px] row-start-2 row-span-2 block mb-3 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 text-center">Eliminar</button>

                                </div>
                            }
                        </div>
                    </div>
                </Card>







            </form>
        </div>
    </div>)
} 

export default ModalImage;
