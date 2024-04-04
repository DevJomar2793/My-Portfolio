<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="style.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
            <title>Todo App</title>
    </head>
    <body>
        <div class="w-full h-full ">
            <div class="px-2 py-2">
                <h1 class="text-center text-2xl md:text-4xl font-bold">Todo App</h1>
            </div>
        </div>
        </div>
        <div class="w-full h-full px-4 mb-5 class 2xl:container 2xl:mx-auto">
            <form class="space-y-1" action="" method="post">
                <h4 class="md:text-2xl">Tasks:</h4>
                <input class="border-2 w-full p-1" type="text" name="" id="task" placeholder="Free Freshness">
                <h4 class="md:text-2xl">Description:</h4>
                <textarea class="border-2 rounded-md w-full h-[100px]" name="" id="description" cols="20" rows="10"></textarea>
                <input class="border-2 text-center px-4 py-1 rounded-md bg-blue-700 text-white" type="submit" name="" id="createTask" value="Add item">
            </form>
        </div>
        <div class="w-full h-full px-4 2xl:container 2xl:mx-auto">
            <table class="table-auto border-2 w-full">
                <thead class="border-2 text-center md:text-1xl">
                    <tr>
                      <th class="border-2">Tasks #:</th>
                      <th class="border-2">Task</th>
                      <th class="border-2">Description</th>
                      <th class="border-2">Actions</th>
                    </tr>
                  </thead class="md:text-1xl">
                    <tr class="py-2 text-center">
                      <td class="border-2 text-center">1</td>
                      <td class="border-2">Cleaning Dishes</td>
                      <td class="border-2">Cleaning Dishes in kitchen and Dirty Kitchen</td>
                      <td class="space-x-1 px-2 flex justify-center py-2 md:space-x-1 md:flex md:justify-center ">
                        <form action="">
                            <input class="border-2 text-center px-4 py-1 rounded-md bg-blue-700 text-white" type="submit" name="" id="" value="Edit">
                        </form>
                        <form action="">
                            <input class="border-2 text-center px-4 py-1 rounded-md bg-red-700 text-white" type="submit" name="" id="" value="Delete">
                        </form>
                      </td>
                    </tr>
                  </tbody>
            </table>
        </div>

        <!--Create Modal-->
        <!-- <div class="modal fade" id="createModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div> -->
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</html>