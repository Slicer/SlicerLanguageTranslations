<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="pt_BR">
<context>
    <name>SlicerRadiomics</name>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="29"/>
        <source>Radiomics</source>
        <translation>Radiômica</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="38"/>
        <source>
    This is a scripted loadable module bundled in the SlicerRadomics extension.
    It gives access to the radiomics feature calculation classes implemented in pyradiomics library.
    See more details at http://pyradiomics.readthedocs.io/.
    </source>
        <translation>
    Este é um módulo carregável com um script incluído na extensão SlicerRadomics.
    Ele permite acessar as classes de cálculo de características radiômicas implementadas na biblioteca pyradiomics.
    Veja mais detalhes em http://pyradiomics.readthedocs.io/.
    </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="48"/>
        <source>
    This work was partially supported by NIH/NCI ITCR program grant U24 CA194354.
    </source>
        <translation>
    Este trabalho foi parcialmente financiado pela bolsa U24 CA194354 do programa ITCR do NIH/NCI.
    </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="101"/>
        <source>Run the algorithm.</source>
        <translation>Execute o algoritmo.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="132"/>
        <source>Select Input Volume and Segmentation</source>
        <translation>Selecionar volume de entrada e segmentação</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="149"/>
        <source>Pick the input image for the feature calculation.</source>
        <translation>Selecione a imagem de entrada para o cálculo da característica.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="150"/>
        <source>Input Image Volume: </source>
        <translation>Volume da imagem de entrada: </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="165"/>
        <source>Pick the regions for feature calculation - defined by a segmentation or labelmap volume node.</source>
        <translation>Selecione as regiões para o cálculo das características — definidas por um nó de volume de segmentação ou de mapa de rótulos.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="166"/>
        <source>Input regions: </source>
        <translation>Regiões de entrada: </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="171"/>
        <source>Extraction Customization</source>
        <translation>Personalização da extração</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="182"/>
        <source>Manual Customization</source>
        <translation>Personalização manual</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="187"/>
        <source>Parameter File Customization</source>
        <translation>Personalização do arquivo de parâmetros</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="203"/>
        <source>Feature Classes</source>
        <translation>Classes de recursos</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="209"/>
        <source>Features:</source>
        <translation>Características:</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="232"/>
        <source>Toggle Features:</source>
        <translation>Alternar recursos:</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="234"/>
        <source>All Features</source>
        <translation>Todos os recursos</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="236"/>
        <source>Calculate all feature classes.</source>
        <translation>Calcular todas as classes de recursos.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="238"/>
        <source>No Features</source>
        <translation>Sem recursos</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="240"/>
        <source>Calculate no feature classes.</source>
        <translation>Não calcular nenhuma classe de objeto.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="246"/>
        <source>Resampling and Filtering</source>
        <translation>Reamostragem e filtragem</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="255"/>
        <source>Three floating-point numbers separated by comma defining the resampled pixel size (mm).</source>
        <translation>Três números decimais, separados por vírgula, que definem o tamanho do pixel reamostrado (mm).</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="255"/>
        <source>Resampled voxel size</source>
        <translation>Tamanho do voxel reamostrado</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="261"/>
        <source>Laplacian of Gaussian filter kernel sizes (mm), separated by comma. If empty, no LoG filtering will be applied.</source>
        <translation>Tamanhos do kernel do filtro Laplaciano de Gaussiano (mm), separados por vírgula. Se o campo estiver vazio, nenhuma filtragem LoG será aplicada.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="261"/>
        <source>LoG kernel sizes</source>
        <translation>Tamanhos do kernel do LoG</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="268"/>
        <source>If checked, PyRadiomics will calculate features on the image after applying wavelet transformation</source>
        <translation>Se essa opção estiver marcada, o PyRadiomics calculará as características da imagem após aplicar a transformação wavelet</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="268"/>
        <source>Wavelet-based features</source>
        <translation>Características baseadas em wavelets</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="275"/>
        <source>Settings</source>
        <translation>Configurações</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="289"/>
        <source>Set the bin width</source>
        <translation>Defina a largura da caixa</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="289"/>
        <source>Bin Width</source>
        <translation>Largura do compartimento</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="295"/>
        <source>Use a symmetrical GLCM matrix</source>
        <translation>Use uma matriz GLCM simétrica</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="295"/>
        <source>Enforce Symmetrical GLCM</source>
        <translation>Aplicar GLCM simétrico</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="310"/>
        <source>Parameter File</source>
        <translation>Arquivo de parâmetros</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="315"/>
        <source>Output</source>
        <translation>Saída</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="324"/>
        <source>If checked, PyRadiomics outputs log messages from level DEBUG and higher (instead of INFO and higher)</source>
        <translation>Se marcada, o PyRadiomics exibe mensagens de log do nível DEBUG e superiores (em vez de INFO e superiores)</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="324"/>
        <source>Verbose Output</source>
        <translation>Saída detalhada</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="337"/>
        <source>Select the table where features will be saved, resets feature values on each run.</source>
        <translation>Selecione a tabela na qual as características serão salvas; os valores das características são reinicializados a cada execução.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="337"/>
        <source>Output table:</source>
        <translation>Tabela de resultados:</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="386"/>
        <source>Working...</source>
        <translation>Processando...</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="472"/>
        <source>Apply</source>
        <translation>Aplicar</translation>
    </message>
</context>
<context>
    <name>qSlicerAbstractCoreModule</name>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="30"/>
        <source>Informatics</source>
        <translation>Tecnologia da informação</translation>
    </message>
</context>
</TS>
