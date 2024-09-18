import { Row, Col } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { setInputValue } from "../service/redux/inputSearchSlice"
import { fetchRecipe } from "../service/redux/recipeSeekerSlice"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { clearRandomRecipes } from "../service/redux/randomRecipesSlice"

export const SearchRecipes = () => {
    const inputState = useSelector(state => state.inputSearch.value)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleInputChange = (e) => {
        dispatch(setInputValue(e.target.value))
    }

    useEffect(() => {
        const delay = setTimeout(() => {
            if (inputState.trim()) {
                dispatch(fetchRecipe(inputState))
                    .unwrap()
                    .then(data => navigate('/query', {state: {data}}))
                    .catch(error => console.log(error))
            }
        }, 1000)
        
        return () => {
            dispatch(clearRandomRecipes())
            clearTimeout(delay)
        }
    }, [inputState, dispatch, navigate])

    return (
        <>
        <Row className="justify-content-center">
        <h1 className="text-center mt-5 text-white">Search it here!</h1>
        <input className="form-control mt-3" type="search" placeholder="Search Recipes" style={{width: '90%'}} value={inputState} onChange={handleInputChange} />   
        </Row>

        <Row>
        <Col className="mt-3">
            {/* Images */}
               <svg width="50%" height="100%" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M683.49 271.58C799.57 294 887.23 396 887.23 518.44c0 108.17-68.4 200.38-164.36 235.86A251.85 251.85 0 0 1 486.7 918.44h-22.89C324.76 918.44 212 805.87 212 667a252.25 252.25 0 0 1 5-50.26A210.63 210.63 0 0 1 154.82 467c0-103.93 75.08-190.34 174-208.09a189 189 0 0 1 354.64 12.66z" fill="#FFFFFF" /><path d="M472 918.43c-86.81-39.79-147.09-127.27-147.09-228.78a252.11 252.11 0 0 1 5-50.3 210.66 210.66 0 0 1-62.41-149.89c0-104 75.27-190.52 174.47-208.29a189.37 189.37 0 0 1 163.3-117.35 189.43 189.43 0 0 1 89 107.15C810.62 293.38 898.5 395.49 898.5 518.06c0 108.27-68.57 200.57-164.77 236.08A252.47 252.47 0 0 1 497 918.44h-25z" fill="#FFF9F9" /><path d="M424 913.49c63.36-47.67 126.25-119.07 126.25-223.84a252.15 252.15 0 0 1 5-50.3 210.66 210.66 0 0 1-62.41-149.88c0-104 75.27-190.52 174.47-208.29a188.05 188.05 0 0 1 17.69-33.3 187.17 187.17 0 0 1 9.25 23.12C810.62 293.38 898.5 395.49 898.5 518.06c0 108.27-68.57 200.57-164.77 236.08A252.47 252.47 0 0 1 497 918.44h-23a254.3 254.3 0 0 1-50-4.95z" fill="#FFD0BB" /><path d="M357.64 524.24a157.75 157.68 0 1 0 315.5 0 157.75 157.68 0 1 0-315.5 0Z" fill="#FFFFFF" /><path d="M597.93 389.83a157.7 157.7 0 0 1-48.09 288.32A146.43 146.43 0 0 1 583 389.08a148.27 148.27 0 0 1 14.93 0.75z" fill="#FFCF00" /><path d="M487 938.92h-23.53A271.91 271.91 0 0 1 191.56 667a274.56 274.56 0 0 1 3.44-43.56 232 232 0 0 1 119.47-382.53 209.4 209.4 0 0 1 384.38 13c121.72 28.86 208.86 138.27 208.86 264.56a272 272 0 0 1-169 251.77A272 272 0 0 1 487 938.92z m16.83-777.14a168.4 168.4 0 0 0-156 104.82l-4.18 10.4-11.11 2a191 191 0 0 0-101 323.28l7.81 7.78-2.19 10.8a232.83 232.83 0 0 0-4.6 46.13A230.95 230.95 0 0 0 463.47 898H487a231 231 0 0 0 216.66-150.73l3.27-8.83 8.84-3.26a231 231 0 0 0 151-216.73c0-110.64-78.73-206-187.19-226.81l-11.87-2.27-3.75-11.49a168.42 168.42 0 0 0-160.1-116.1z" fill="" /><path d="M515.39 702.4c-98.28 0-178.23-79.92-178.23-178.16s80-178.16 178.23-178.16S693.62 426 693.62 524.24 613.67 702.4 515.39 702.4z m0-315.36c-75.69 0-137.27 61.55-137.27 137.2s61.58 137.2 137.27 137.2 137.27-61.55 137.27-137.2S591.08 387 515.39 387z" fill="" /></svg>
            </Col>
        </Row>

        <Row>
        <Col className="mt-3">
                <svg width="50%" height="100%" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M733.66 912.59c52 0 254.46-97.56 143.45-424.17S430.22 141.85 288 204.13 50.07 437.24 134.18 587.81c48.23 86.34 158.38 117.08 268.21 117.08 50.58 0 126.7 28.58 157.44 83C591 843 653.56 912.59 733.66 912.59z" fill="#FFFFFF" /><path d="M346.71 185.68c160.72-34.68 432.68 15.24 530.4 302.74C959 729.23 870.37 845.53 797.35 890c-78.22-2.21-139.27-70.46-169.92-124.68-30.74-54.38-106.86-83-157.44-83-109.82 0-220-30.74-268.21-117.08-82.33-147.36 7.7-314.17 144.93-379.56z" fill="#FFDFC4" /><path d="M386.82 596.55C339.14 629.19 190 633.51 190 467.42c0-186.57 242.63-222.21 289.11-213.92S625 271 673.49 346.42c27.5 42.79-4.8 78.4-32.64 92-60.33 29.52-115.85 22.88-176.9 70.72s-44.54 65.11-77.13 87.41zM819.59 725.68c-16.61 51.32-42 91.78-89 91.78s-66.08-30.07-102.68-91.78C590.13 662 522.2 654.11 496.65 645.55s-21.7-71.35 67.43-101.12c59.21-19.77 210.25-82.28 255.51 44 17.18 47.87 12.77 97.8 0 137.25z" fill="#FFFFFF" /><path d="M329.18 614.13c-39.31-17.82-71.57-58.2-71.57-135.45 0-175.08 213.67-217.25 278.4-214.93 47.54 10.55 104.4 31.19 137.48 82.67 27.5 42.79-4.8 78.4-32.64 92-60.33 29.52-115.85 22.88-176.9 70.72s-44.54 65.1-77.12 87.41c-13.21 9-34.2 15.91-57.65 17.58z" fill="#FFA4A4" /><path d="M367.89 606c-18.91-23-31.41-56.76-31.41-104.84 0-165.82 191.66-212.42 266.93-214.91 26.86 13.1 52 32 70.08 60.12 27.5 42.79-4.8 78.4-32.64 92-60.33 29.57-115.85 22.93-176.9 70.77s-44.54 65.1-77.12 87.41a87.59 87.59 0 0 1-18.93 9.5z" fill="#FF6767" /><path d="M521.23 565c11.31-7.68 25.46-14.74 42.86-20.55 59.21-19.77 210.25-82.28 255.51 44 16.23 45.26 13.19 92.34 2 130.67-15.06 24.31-35.39 40.18-64.21 40.18-45 0-63.24-28.78-98.26-87.83C623 610.49 558 602.91 533.58 594.73c-9.86-3.3-15.15-15.04-12.35-29.73z" fill="#FFA4A4" /><path d="M599.69 532.3c70.23-23 182.06-49.47 219.91 56.08C835 631.4 833 676 823.23 713.27c-35.88-5.31-53.77-33.92-85.2-86.92-36.12-60.91-101.12-68.49-125.58-76.67-6.88-2.31-11.53-8.68-12.76-17.38z" fill="#FF6767" /><path d="M268.88 466.4a45.07 45.05 0 1 0 90.14 0 45.07 45.05 0 1 0-90.14 0Z" fill="#FFFFFF" /><path d="M733.66 933.07c-41.06 0-80.85-15.6-118.27-46.36-28-23-54-54.51-73.39-88.78-25.33-44.82-92.19-72.56-139.61-72.56-61.56 0-118.5-9.53-164.66-27.57-55.66-21.74-96.51-55.39-121.43-100-19.3-34.52-30.5-71.29-33.35-109.3-2.66-35.49 2-71.35 13.83-106.57 28.73-85.46 97.15-158.94 183-196.55 43.92-19.24 101-29.78 160.94-29.78h3.39c69.48 0.46 138.67 15 200.1 42.09a445.12 445.12 0 0 1 146.54 103.47C837 350.55 872.54 411.34 896.5 481.83c27.39 80.6 38.24 154.09 32.23 218.44-5.08 54.38-22 102-50.31 141.5-47.65 66.51-114.08 91.3-144.76 91.3zM440.85 196.63c-57.32 0-108.46 10.42-144.61 26.26a303.57 303.57 0 0 0-98.92 70.33c-28.09 30-49.43 65.22-61.71 101.76-14.68 43.69-23.75 110.87 16.46 182.85 20.17 36.1 54 63.63 100.58 81.83 41.46 16.2 93.24 24.76 149.75 24.76 29.64 0 64.26 8.41 95 23.09 25.34 12.1 59.85 34.12 80.28 70.27 31.25 55.27 88.64 114.33 156 114.33 6.81 0 24.43-3.42 47.3-16.23a199.67 199.67 0 0 0 64.16-58c68.58-95.75 44.71-228.45 12.6-322.91-22.1-64.91-54.74-120.71-96.9-165.83a404.39 404.39 0 0 0-133.12-94c-62.43-27.48-127.92-38.51-186.87-38.51z" fill="" /><path d="M318.5 635c-24.47 0-50-5.14-72.77-17.12-34.77-18.33-76.21-59.33-76.21-150.49 0-35.08 7-67.47 20.83-96.26 12.41-25.84 30.35-48.91 53.33-68.57 42-35.93 92.34-53.39 127.17-61.7 39.29-9.38 80.49-12.27 110.48-7.77 56.47 3.7 157.82 22 209.39 102.23 13.07 20.33 16.89 42.13 11 63-6.7 24-26.11 45.83-51.92 58.46s-50.32 19-74 25.14c-33.81 8.78-65.75 17.07-99.24 43.3-31.36 24.62-39.56 39.31-46.87 52.28-6.5 11.59-13.22 23.58-31.3 36-19.31 13.17-48.7 21.5-79.89 21.5z m131.83-363c-50.69 0-127.78 17.05-180 61.75-39.7 34-59.83 79-59.83 133.71C210.48 498.2 216 524 227 544a91 91 0 0 0 37.87 37.68c39.6 20.88 89.57 12.24 110.42-2 10.17-7 13.21-12.37 18.71-22.19 8.24-14.69 19.52-34.81 57.35-64.44 40.2-31.49 77.82-41.25 114.2-50.7 22.76-5.91 44.25-11.49 66.34-22.29 11.4-5.57 26.21-17.48 30.46-32.68 2.68-9.58 0.7-19.35-6.06-29.86C614.15 292 526.38 277 477.82 273.94l-0.94-0.06-0.93-0.15a168.14 168.14 0 0 0-25.62-1.73zM730.56 837.94c-59.91 0-83.93-40.51-120.3-101.82-27.57-46.49-73.59-58.59-104-66.59-6.14-1.61-11.44-3-16.07-4.56-17.07-5.71-27.67-22-27.67-42.56 0-18.2 8.36-37.4 23.53-54.06 16.87-18.53 41-33.12 71.59-43.35 3.86-1.29 8.24-2.81 12.88-4.41C604.59 508.78 656 491 706.29 491h1.08c29.65 0.15 55.36 6.69 76.41 19.44 25.1 15.2 43.64 39.11 55.09 71.06 22.37 62.39 9.73 121.08 0.21 150.51-10.21 31.55-22.35 55.18-37.1 72.23-19.36 22.35-43.39 33.7-71.42 33.7z m-226.5-211.51c3.26 1 7.61 2.18 12.57 3.49 32.4 8.52 92.72 24.37 128.86 85.31 38.67 65.2 52.08 81.77 85.07 81.77 30.73 0 52.18-23.94 69.55-77.61 7.92-24.47 18.47-73.12 0.21-124.07-15.41-43-45-63.12-93.16-63.37h-0.87c-43.36 0-90.89 16.46-122.41 27.38-4.75 1.64-9.23 3.2-13.31 4.56-51.51 17.2-63.39 43.29-65.8 50.88-2.05 6.41-1.27 10.31-0.71 11.66z" fill="" /><path d="M313.95 522.71a56.31 56.31 0 1 1 56.33-56.31 56.39 56.39 0 0 1-56.33 56.31z m0-90.1a33.79 33.79 0 1 0 33.81 33.79 33.84 33.84 0 0 0-33.81-33.79z" fill="" /></svg>
            </Col>
        </Row>

        <Row>
        <Col className="mt-3">
                <svg width="50%" height="100%" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M364.91 202.73h315.5l169.02 202.73v518.1H195.89v-518.1l169.02-202.73z" fill="#FFFFFF" /><path d="M473.83 204.81h204.8l174.08 204.81v512.01H299.76V409.62l174.07-204.81z" fill="#D0E0FF" /><path d="M665.27 202.73l169.02 202.73v518.1H590.27v-518.1l75-202.73z" fill="#70A6FF" /><path d="M504.55 399.37h358.4v30.72h-358.4z" fill="" /><path d="M873.19 942.12H176.88v-540L362 184.33h326.1l185.09 217.76z m-655.35-41h614.39v-484L669.16 225.29H380.91L217.84 417.14z" fill="" /><path d="M412.4 112.64h266.24v92.16H412.4z" fill="#CFD5FF" /><path d="M699.11 225.29H330.48V92.17h368.63z m-327.68-41h286.72v-51.2H371.44z" fill="" /><path d="M484.07 798.75a20.48 20.48 0 0 1-20.48-20.48V403.38a20.48 20.48 0 0 1 5.08-13.5l174.08-198.57a20.48 20.48 0 1 1 30.8 27l-169 192.77v367.19a20.48 20.48 0 0 1-20.48 20.48zM484.07 829.47A20.48 20.48 0 0 1 504.55 850v71.68a20.48 20.48 0 0 1-20.48 20.48 20.48 20.48 0 0 1-20.48-20.48V850a20.48 20.48 0 0 1 20.48-20.53z" fill="" /><path d="M197.36 399.37H463.6v30.72H197.36z" fill="" /><path d="M364.85 347.6c-11.91 0-21.79-4.12-28.39-12-8.21-9.78-9.83-23.57-4.57-38.83 4.64-13.46 14.31-26.84 27.24-37.69s27.79-18 41.84-20.28c15.94-2.53 29.24 1.46 37.45 11.24 8.21 9.78 9.83 23.57 4.57 38.83-4.64 13.46-14.31 26.84-27.24 37.69s-27.79 18-41.84 20.28a57.81 57.81 0 0 1-9.06 0.76z m45.06-89a36.61 36.61 0 0 0-5.71 0.48c-10.29 1.64-21.92 7.37-31.89 15.74s-17.64 18.82-21 28.67c-2.79 8.08-2.46 15 0.89 19s10.11 5.52 18.55 4.18c10.29-1.63 21.92-7.37 31.89-15.74s17.64-18.82 21-28.67c2.79-8.08 2.46-15-0.89-19-2.56-3.09-7.1-4.69-12.84-4.69z" fill="" /><path d="M387.52 370.07c-11.65 0-21.8-3.9-28.54-11.93-0.44-0.49-2.51-2.46-4.33-4.2-3.21-3.07-7.6-7.26-12-11.82l14.65-14.31c4.2 4.3 8.45 8.36 11.55 11.32 3.36 3.21 4.89 4.68 5.86 5.84 7.16 8.53 29.65 5.88 50.46-11.58 10-8.37 17.65-18.82 21.05-28.67 2.77-8 2.47-14.9-0.82-18.9-0.46-0.48-2-1.87-3.18-3a187.49 187.49 0 0 1-17.7-18l15.82-13a167.69 167.69 0 0 0 15.75 16 58.29 58.29 0 0 1 4.94 4.81c8.21 9.78 9.83 23.57 4.56 38.83-4.64 13.45-14.32 26.84-27.25 37.68-16.51 13.75-35.04 20.93-50.82 20.93z" fill="" /></svg>
            </Col>
        </Row>

        <Row>
        <Col className="mt-3">
                <svg width="50%" height="100%" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M250.42 815.17C135.89 705.81 128 530.31 216.51 377.08S461 142.93 613 187.39a68.84 68.84 0 0 1 4.05-8.24c20.24-35 67.24-45.81 105-24S773.94 222.94 753.7 258a68.85 68.85 0 0 1-5.11 7.63C863.12 375 871 550.48 782.49 703.71S538 937.86 386 893.4a68.84 68.84 0 0 1-4.05 8.24c-20.24 35-67.24 45.81-105 24s-51.9-67.83-31.65-102.88a68.84 68.84 0 0 1 5.12-7.59z" fill="#FFFFFF" /><path d="M754.53 189.06c11.05 21.67 11.62 47.38-0.83 68.93a68.85 68.85 0 0 1-5.11 7.63C863.12 375 871 550.48 782.49 703.71S538 937.86 386 893.4a68.84 68.84 0 0 1-4.05 8.24c-12.35 21.36-34.58 33.66-58.6 35.14-11.05-21.67-11.62-47.38 0.83-68.93a68.84 68.84 0 0 1 5.11-7.63c-114.53-109.36-122.41-284.86-33.9-438.09S539.88 188 691.9 232.44a68.83 68.83 0 0 1 4.1-8.24c12.28-21.33 34.51-33.66 58.53-35.14z" fill="#FBDB7B" /><path d="M308 837.75q222-85.63 312.28-243.21Q704 448.43 737.86 191.91a77.73 77.73 0 0 1 16.67-2.86c11.05 21.67 11.62 47.38-0.83 68.93a68.85 68.85 0 0 1-5.11 7.63C863.12 375 871 550.48 782.49 703.71S538 937.86 386 893.4a68.84 68.84 0 0 1-4.05 8.24c-12.35 21.36-34.58 33.66-58.6 35.14-11.05-21.67-11.62-47.38 0.83-68.93a68.84 68.84 0 0 1 5.11-7.63A304.28 304.28 0 0 1 308 837.75z" fill="#F9AF49" /><path d="M318.34 957.37a103.2 103.2 0 0 1-51.62-14 101.86 101.86 0 0 1-46.9-58.18c-7-22.82-5.31-46.37 4.74-67C172.5 763.23 142.27 693 136.89 614c-5.58-81.92 15.82-167.38 61.88-247.13 35.54-61.54 82.77-113.4 136.57-150l23 33.87c-48.74 33.15-91.66 80.39-124.14 136.62-42 72.68-61.51 150.08-56.49 223.86 5.06 74.37 35.08 139.79 86.8 189.17l13.33 12.73-11.26 14.59A48.52 48.52 0 0 0 263 833c-6.91 12-8.36 26.22-4.07 40.15a61 61 0 0 0 28.23 34.75c27.89 16.1 62.43 8.67 77-16.54a48.48 48.48 0 0 0 2.85-5.79l7-17 17.68 5.17c68.69 20.08 140.38 13.36 207.31-19.45 66.43-32.54 123.73-88.15 165.71-160.83s61.51-150.08 56.49-223.86c-5.06-74.37-35.08-139.79-86.8-189.17l-13.29-12.73 11.26-14.59a48.46 48.46 0 0 0 3.59-5.36c6.91-12 8.36-26.23 4.07-40.15a61 61 0 0 0-28.23-34.75c-27.89-16.1-62.43-8.67-77 16.54a48.53 48.53 0 0 0-2.85 5.79l-37.88-15.59a89.66 89.66 0 0 1 5.26-10.69c25.85-44.76 85.49-58.91 132.93-31.53a101.86 101.86 0 0 1 46.9 58.18c7 22.82 5.31 46.37-4.74 67 52.07 55 82.29 125.25 87.67 204.25 5.58 81.92-15.82 167.38-61.88 247.13s-109.4 141-183.16 177.13c-71.14 34.84-147.13 43.81-220.81 26.23-17.51 25.89-47.01 40.08-77.9 40.08z" fill="" /><path d="M448.43 264.45q87.12 0 157.75-78.84-70.63-78.84-157.75-78.84t-157.75 78.84q70.63 78.84 157.75 78.84z" fill="#89D66D" /><path d="M452.43 284.93c-63.88 0-122.09-28.82-173-85.65l-12.24-13.67 12.24-13.67c50.92-56.84 109.12-85.65 173-85.65s122.09 28.82 173 85.65l12.24 13.67-12.24 13.67c-50.91 56.84-109.12 85.65-173 85.65zM323 185.61c17.84 17.55 36.49 31.25 55.63 40.81a164.13 164.13 0 0 0 147.69 0c19.14-9.57 37.79-23.26 55.63-40.81-17.84-17.55-36.49-31.25-55.63-40.81a164.14 164.14 0 0 0-147.69 0c-19.18 9.57-37.84 23.26-55.63 40.81z" fill="" /><path d="M430.87 169.9h151.55a11.26 11.26 0 0 1 11.26 11.26v8.19a11.26 11.26 0 0 1-11.26 11.26H430.87a11.26 11.26 0 0 1-11.26-11.26v-8.19a11.26 11.26 0 0 1 11.26-11.26z" fill="#015200" /><path d="M310.52 871a19.91 19.91 0 0 1-10-2.68C249.7 839 213.27 808.13 189.17 774a20 20 0 1 1 32.66-23c20.69 29.27 53 56.32 98.71 82.71a20 20 0 0 1-10 37.33z" fill="" /></svg>
            </Col>
        </Row>
        </>
    )
}