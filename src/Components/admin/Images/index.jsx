import AdminSidebar from "../sidebar";
import ImagenesAdmin from "./images";

function ImagesIndex() {
    return (

        <div className="flex h-[100vh]">
            <AdminSidebar></AdminSidebar>
            <ImagenesAdmin/>
        </div>

    );
}

export default ImagesIndex;