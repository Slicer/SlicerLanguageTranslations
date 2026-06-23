<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es_419">
<context>
    <name>SlicerRadiomics</name>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="29"/>
        <source>Radiomics</source>
        <translation>Radiómica</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="38"/>
        <source>
    This is a scripted loadable module bundled in the SlicerRadomics extension.
    It gives access to the radiomics feature calculation classes implemented in pyradiomics library.
    See more details at http://pyradiomics.readthedocs.io/.
    </source>
        <translation>
    Este es un módulo que se carga con un script incluido en la extensión SlicerRadomics.
    Brinda acceso a las clases de cálculo de características radiómicas implementadas en la biblioteca pyradiomics.
    Consulte más detalles en http://pyradiomics.readthedocs.io/.
    </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="48"/>
        <source>
    This work was partially supported by NIH/NCI ITCR program grant U24 CA194354.
    </source>
        <translation>
    Este trabajo fue parcialmente financiado por la subvención U24 CA194354 del programa ITCR de NIH/NCI.
    </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="101"/>
        <source>Run the algorithm.</source>
        <translation>Ejecutar el algoritmo.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="132"/>
        <source>Select Input Volume and Segmentation</source>
        <translation>Seleccionar el volumen de entrada y la segmentación</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="149"/>
        <source>Pick the input image for the feature calculation.</source>
        <translation>Seleccione la imagen de entrada para el cálculo de las características.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="150"/>
        <source>Input Image Volume: </source>
        <translation>Volumen de la imagen de entrada: </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="165"/>
        <source>Pick the regions for feature calculation - defined by a segmentation or labelmap volume node.</source>
        <translation>Seleccione las regiones para el cálculo de las características - definidas por una segmentación o de un nodo de volumen de un mapa de etiquetas.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="166"/>
        <source>Input regions: </source>
        <translation>Regiones de entrada: </translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="171"/>
        <source>Extraction Customization</source>
        <translation>Personalización de la extracción</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="182"/>
        <source>Manual Customization</source>
        <translation>Personalización manual</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="187"/>
        <source>Parameter File Customization</source>
        <translation>Personalización mediante archivo de parámetros</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="203"/>
        <source>Feature Classes</source>
        <translation>Clases de características</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="209"/>
        <source>Features:</source>
        <translation>Características:</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="232"/>
        <source>Toggle Features:</source>
        <translation>Alternar características:</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="234"/>
        <source>All Features</source>
        <translation>Todas las características</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="236"/>
        <source>Calculate all feature classes.</source>
        <translation>Calcular todas las clases de características.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="238"/>
        <source>No Features</source>
        <translation>Ninguna característica</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="240"/>
        <source>Calculate no feature classes.</source>
        <translation>Calcular sin clases de características.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="246"/>
        <source>Resampling and Filtering</source>
        <translation>Remuestreo y filtrado</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="255"/>
        <source>Three floating-point numbers separated by comma defining the resampled pixel size (mm).</source>
        <translation>Tres números de punto flotante separados por comas que definen el tamaño del píxel remuestreado (mm).</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="255"/>
        <source>Resampled voxel size</source>
        <translation>Tamaño del vóxel remuestreado</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="261"/>
        <source>Laplacian of Gaussian filter kernel sizes (mm), separated by comma. If empty, no LoG filtering will be applied.</source>
        <translation>Tamaños del kernel del filtro Laplaciano de Gaussiana (mm), separados por comas. Si está vacío, no se aplicará ningún filtrado LoG.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="261"/>
        <source>LoG kernel sizes</source>
        <translation>Tamaño del kernel LoG</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="268"/>
        <source>If checked, PyRadiomics will calculate features on the image after applying wavelet transformation</source>
        <translation>Si está marcada, PyRadiomics calculará las características de la imagen después de aplicar la transformación wavelet</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="268"/>
        <source>Wavelet-based features</source>
        <translation>Características basadas en wavelets</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="275"/>
        <source>Settings</source>
        <translation>Ajustes</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="289"/>
        <source>Set the bin width</source>
        <translation>Establecer el ancho del intervalo</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="289"/>
        <source>Bin Width</source>
        <translation>Ancho del intervalo</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="295"/>
        <source>Use a symmetrical GLCM matrix</source>
        <translation>Usar una matriz GLCM simétrica</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="295"/>
        <source>Enforce Symmetrical GLCM</source>
        <translation>Forzar GLCM simétrica</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="310"/>
        <source>Parameter File</source>
        <translation>Archivo de parámetros</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="315"/>
        <source>Output</source>
        <translation>Salida</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="324"/>
        <source>If checked, PyRadiomics outputs log messages from level DEBUG and higher (instead of INFO and higher)</source>
        <translation>Si está marcada, PyRadiomics muestra mensajes de registro desde el nivel DEBUG y superiores (en lugar de INFO y superiores)</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="324"/>
        <source>Verbose Output</source>
        <translation>Salida detallada</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="337"/>
        <source>Select the table where features will be saved, resets feature values on each run.</source>
        <translation>Seleccione la tabla donde se guardarán las características; los valores de las características se reinician en cada ejecución.</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="337"/>
        <source>Output table:</source>
        <translation>Tabla de salida:</translation>
    </message>
    <message>
        <location filename="SlicerRadiomics/SlicerRadiomics.py" line="386"/>
        <source>Working...</source>
        <translation>Procesando...</translation>
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
        <translation>Informática</translation>
    </message>
</context>
</TS>
