<!DOCTYPE html>
<html>

    <head>
        <?php include 'components/head.html' ?>
    </head>

    <body>
        
        <main class="main" id="top">
            
        <?php include 'components/menu.html' ?>

        <?php include 'components/topo.html' ?>
        
        <div class="content">

            <div class="row g-3 mb-3">

                <div class="col-sm-6 col-md-4 col-xl-3 col-xxl-4">
                    <div class="card h-100">
                        <div class="card-body">
                            <p class="mb-0">Teste</p>
                        </div>
                    </div>
                </div>

            </div>

            <?php include 'components/rodape.html' ?>

        </div>
        
        </main>


        <?php include 'components/scripts.html' ?>
        <script>
            iniciar_autenticacao()
        </script>

    </body>

</html>