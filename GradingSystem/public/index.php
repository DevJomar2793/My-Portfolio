<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
            <title>Grading System</title>
    </head>
    <body>
        <div class="w-full h-screen bg-cover flex align-center justify-center " style="background-image: url('../design/Hallway.jpg')">
            <div class="w-[400px] h-[550px] self-center bg-slate/70 backdrop-blur-xl bg border-gray-500 shadow-2xl rounded-md" >
                <div class="p-2 text-center text-lg bg-sky-500/75 rounded-md">
                    <h1 class="text-white font-bold text-2xl">Grading System</h1>
                </div>
                <div class="flex justify-end my-2 px-2">
                    <input class="px-1 py-1 rounded-md bg-sky-500/75 text-white text-xl font-medium" data-bs-toggle="modal" data-bs-target="#remarksModal" type="submit" id="remarksRef" name="" value="Remarks Reference">
                </div>
                <div class="m-2 my-2 py-8 space-y-4">
                    <form class="grid grid-cols-2 gap-4" action="">
                        <h3 class="text-center text-sky-900 font-black text-2xl">English:</h3>
                        <input class="w-[100px] text-2xl font-semibold px-2 text-center rounded-md" type="number" name="" id="english">
                        <h3 class="text-center text-sky-900 font-black text-2xl">Math:</h3>
                        <input class="w-[100px] text-2xl font-semibold px-2 text-center rounded-md" type="number" name="" id="math">
                        <h3 class="text-center text-sky-900 font-black text-2xl">Physics:</h3>
                        <input class="w-[100px] text-2xl font-semibold px-2 text-center rounded-md" type="number" name="" id="physics">
                        <h3 class="text-center text-sky-900 font-black text-2xl">Chemistry:</h3>
                        <input class="w-[100px] text-2xl font-semibold px-2 text-center rounded-md" type="number" name="" id="chemistry">
                        <h3 class="text-center text-sky-900 font-black text-2xl">Computer:</h3>
                        <input class="w-[100px] text-2xl font-semibold px-2 text-center rounded-md" type="number" name="" id="computer">
                    </form>
                </div>
                <div class="flex justify-center space-x-1">
                    <input class="px-4 py-2 rounded-md bg-sky-500/75 text-white text-xl font-medium" data-bs-toggle="modal" data-bs-target="#averageModal" type="submit" id="averageGrade" name="" value="Average">
                </div>
            </div>
            <!-- Average Modal -->
            <div class="modal fade" id="averageModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="bg-sky-500/75 modal-header">
                            <h1 class="text-white font-bold text-2xl modal-title fs-5" id="exampleModalLabel">Total Grade</h1>
                        </div>
                        <div class="flex space-x-1 modal-body">
                            <h4 class="text-center text-sky-900 font-black text-2xl" >Your Average:</h4>
                            <h4 class="text-center text-sky-900 font-black text-2xl" id="resultAverage"></h4>
                        </div>
                        <div class="grid justify-items-start space-x-1 modal-body">
                            <h4 class="text-center text-sky-900 font-black text-2xl" >Your Rating:</h4>
                            <h4 class="text-center text-sky-900 font-black text-2xl" id="resultDescription">TEST</h4>
                            <h4 class="text-center text-sky-900 font-black text-2xl" >Remarks:</h4>
                            <h4 class="text-center text-sky-900 font-black text-2xl" id="resultRemarks">TEST</h4>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="px-4 py-2 rounded-md bg-sky-500/75 text-white text-xl font-medium" data-bs-dismiss="modal" id="closeAverage">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Remarks Reference Modal -->
            <div class="modal fade" id="remarksModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="bg-sky-500/75 modal-header">
                            <h1 class="text-white font-bold text-2xl modal-title fs-5" id="exampleModalLabel">Reference</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="flex justify-evenly space-x-1 modal-body">
                            <div class="text-center">
                                <h1 class="text-sky-900 font-black text-2xl">GRADE</h1>
                                <h4 class="text-center text-sky-900 font-black text-xl">100 - 90</h4>
                                <h4 class="text-center text-sky-900 font-black text-xl">89 - 85</h4>
                                <h4 class="text-center text-sky-900 font-black text-xl">84 - 80</h4>
                                <h4 class="text-center text-sky-900 font-black text-xl">79 - 75</h4>
                                <h4 class="text-center text-sky-900 font-black text-xl">74 and below</h4>
                            </div>
                            <div class="text-center">
                                <h1 class="text-sky-900 font-black text-2xl">DESCRIPTION</h1>
                                <h4 class="text-center text-sky-900 font-black text-xl">Outstanding</h4>
                                <h4 class="text-center text-sky-900 font-black text-xl">Very Satisfactory</h4>
                                <h4 class="text-center text-sky-900 font-black text-xl">Satisfactory</h4>
                                <h4 class="text-center text-sky-900 font-black text-xl">Fairly Satisfactory</h4>
                                <h4 class="text-center text-sky-900 font-black text-xl">Did not meet expectation</h4>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="px-4 py-2 rounded-md bg-sky-500/75 text-white text-xl font-medium" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </body>
    <script src="../js/index.js"></script>
</html>