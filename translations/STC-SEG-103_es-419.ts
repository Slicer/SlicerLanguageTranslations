<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es-419">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="1"/>
        <source>AI-based Segmentation in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation>Segmentación basada en IA en 3D Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="2"/>
        <source>Sonia Pujol, Ph. D
Brigham and Women&apos;s Hospital,
Harvard Medical School
Boston, MA</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation>Dra. Sonia Pujol
Brigham and Women&apos;s Hospital,
Harvard Medical School
Boston, MA</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="3"/>
        <source>Slicer Ribeirão Preto Workshop
June 30, 2025</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation>Slicer Workshop Ribeirão Preto 
Junio 30, 2025</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="4"/>
        <source>Manual vs AI-powered Segmentation</source>
        <extracomment>1_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="5"/>
        <source>Medical images have traditionally been manually segmented, which is a time-consuming process that requires intensive effort by radiologists and is subject to inter-reader variability.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation>Las imágenes médicas han sido segmentadas tradicionalmente de forma manual, lo cual es un proceso que consume mucho tiempo, requiere un esfuerzo intensivo por parte de los radiólogos y está sujeto a variabilidad entre radiólogos.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="6"/>
        <source>Manual vs AI-powered Segmentation</source>
        <extracomment>2_TextBox_0</extracomment>
        <translation>Segmentación manual vs. segmentación asistida por IA</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="7"/>
        <source>In the past decade, image segmentation has been powered by the development of deep learning algorithms (e.g. nnUnet by the German Cancer Research Center (DKFZ)/Helmholtz Research).


AI-powered segmentation tools can reduce the segmentation time and provide more reproducible results.</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation>En la última década, la segmentación de imágenes ha sido impulsada por el desarrollo de algoritmos de aprendizaje profundo (p. ej., nnUnet del Centro Alemán de Investigación del Cáncer (DKFZ)/Helmholtz Research).


 Las herramientas de segmentación basadas en IA pueden reducir el tiempo de segmentación y proporcionar resultados más reproducibles.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>AI Terminology</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation>Terminología de IA</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="9"/>
        <source>A is an AI algorithm that was trained to perform a specific task (e.g. brain tumor segmentation model).

The Weights of an AI model are small numbers that determine how  much importance the model gives to different image features.

During the Training phase, a Model learns patterns from data labelled  by experts and adjusts its weights to improve its predictions.

During the Validation/Test phase, the model is evaluated on a separate set of data not used during the Training phase.

During Inference, the model is applied to new datasets to perform the specific task it was trained for.</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation>Un modelo de IA es un algoritmo de IA que fue entrenado para realizar una tarea específica (p. ej., un modelo de segmentación de tumores cerebrales). 

Los pesos de un modelo de IA son números pequeños que determinan cuánta importancia le da el modelo a diferentes características de la imagen. 

Durante la fase de entrenamiento, un modelo aprende patrones a partir de datos etiquetados por expertos y ajusta sus pesos para mejorar sus predicciones. 

Durante la fase de validación/prueba, el modelo se evalúa en un conjunto de datos separado que no fue utilizado durante la fase de entrenamiento. 

Durante la inferencia, el modelo se aplica a nuevos conjuntos de datos para realizar la tarea específica para la que fue entrenado.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>3D Slicer AI Workshop</source>
        <extracomment>4_TextBox_0</extracomment>
        <translation>Workshop de IA en 3D Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="11"/>
        <source>This tutorial focuses on running inference tasks using various pretrained AI models for automated segmentation of anatomical and pathological structures.</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation>Este tutorial se centra en la ejecución de tareas de inferencia utilizando diversos modelos de IA preentrenados para la segmentación automatizada de estructuras anatómicas y patológicas.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>MONAIAuto3DSeg Slicer extension</source>
        <extracomment>5_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="13"/>
        <source>This tutorial uses the pre-trained models of the MONAIAuto3DSeg Slicer extension.


The tool is designed to work on laptops or on average desktop computer without a GPU.</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation>Este tutorial utiliza los modelos preentrenados de la extensión MONAIAuto3DSeg de Slicer.


La herramienta está diseñada para funcionar en laptops o en computadoras de escritorio promedio sin GPU.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <source>MONAIAuto3DSeg Slicer extension</source>
        <extracomment>6_TextBox_0</extracomment>
        <translation>Slicer extension MONAIAuto3DSeg</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="15"/>
        <source>Multiple modalities Support (CT, MRI).


Multiple anatomies (head, thorax, abdomen, pelvis, etc.).


Multiple pathologies (tumor, hemorrhage, edema).</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation>Compatible con múltiples modalidades (TC, RM).


Múltiples anatomías (cabeza, tórax, abdomen, pelvis, etc.). 


Múltiples patologías (tumor, hemorragia, edema).</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>Slicer AI Tutorial: Segmentation Tasks</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation>Tutorial de IA en Slicer: Tareas de segmentación</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="17"/>
        <source>Segmentation Task #1: Prostate.


Segmentation Task #2: Brain Glioma.


Segmentation Task #3: Whole Body Segmentation.</source>
        <extracomment>7_TextBox_1</extracomment>
        <translation>Tarea de segmentación n.° 1: Próstata. 


Tarea de segmentación n.° 2: Glioma cerebral. 


Tarea de segmentación n.° 3: Segmentación de cuerpo completo.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="18"/>
        <source>AI Segmentation Task #1: Prostate</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation>Tarea de segmentación de IA n.° 1: Próstata</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="19"/>
        <source>AI-based Segmentation of Peripheral Zone (PZ) and Transition Zone (TZ) of the prostate on T2-weighted MRI Images.


Dataset:
msd_prostate_01-t2
msd_prostate_01-adc</source>
        <extracomment>9_TextBox_1</extracomment>
        <translation>Segmentación basada en IA de la zona periférica (ZP) y la zona de transición (ZT) de la próstata en imágenes de RM ponderadas en T2. 


Conjunto de datos: 
msd_prostate_01-t2
msd_prostate_01-adc</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>Click on Add Data in the Welcome to Slicer Module

Click on Choose Directory to Add and browse to the location of the Slicer datasets</source>
        <extracomment>10_TextBox_1</extracomment>
        <translation>Haga clic en &quot;Agregar datos&quot; en el módulo de bienvenida de Slicer

Haga clic en &quot;Elegir directorio para agregar&quot; y navegue hasta la ubicación de los conjuntos de datos de Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="21"/>
        <source>Slicer loads the prostate MRI data set</source>
        <extracomment>11_TextBox_0</extracomment>
        <translation>Slicer carga el conjunto de datos de RM de próstata</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source>Click on Welcome to Slicer in the Modules&apos; menu and browse to the category Segmentation

Selec the MONAI Auto3DSeg module</source>
        <extracomment>12_TextBox_0</extracomment>
        <translation>Haga clic en Bienvenido a Slicer en el menú de módulos y navegue hasta la categoría Segmentación

Seleccione el módulo MONAI Auto3DSeg</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="23"/>
        <source>Enter the model&apos;s name Prostate in the Segmentation model menu</source>
        <extracomment>13_TextBox_0</extracomment>
        <translation>Introduzca el nombre del modelo Prostata en el menú de modelos de segmentación</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>Select the model Prostate - Multisequence</source>
        <extracomment>13_TextBox_1</extracomment>
        <translation>Seleccione el modelo Prostate - Multisequence</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="25"/>
        <source>Enter the Input T2 volume msd-prostate-01-adc and the Input ADC volume msd-prostate-01-adc.</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation>Introduzca el volumen de entrada T2 msd-prostate-01-t2 y el volumen de entrada ADC msd-prostate-01-ad.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>Click on Create new segmentation on Apply</source>
        <extracomment>14_TextBox_1</extracomment>
        <translation>Haga clic en Crear nueva segmentación y luego en Aplicar</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="27"/>
        <source>Slicer starts the inference</source>
        <extracomment>15_TextBox_0</extracomment>
        <translation>Slicer inicia la inferencia</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <source>Slicer shows the results of the AI-based prostate segmentation</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation>Slicer muestra los resultados de la segmentación de próstata basada en IA</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="29"/>
        <source>AI Segmentation Task #2: Brain Glioma</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation>Tarea de segmentación de IA n.° 2: Glioma cerebral</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <source>AI-based Segmentation of Neoplasm, Necrosis and Edema in Brain MRI images.


Datasets:
1) BraTS-GLI_00005-000-t1n (T1-weighted)
2) BraTS-GLI_00005-000-t1c (T1-weighted post-Gd)
3) BraTS-GLI_00005-000-t2w (T2-weighted)
4) BraTS-GLI_00005-000-t2f (T2-FLAIR )</source>
        <extracomment>18_TextBox_1</extracomment>
        <translation>Segmentación basada en IA de Neoplasia, Necrosis y Edema en imágenes de RM
cerebral.


Conjuntos de datos: 
1) BraTS-GLI_00005-000-t1n (ponderada en T1) 
2) BraTS-GLI_00005-000-t1c (ponderada en T1 post-Gd) 
3) BraTS-GLI_00005-000-t2w (ponderada en T2) 
4) BraTS-GLI_00005-000-t2f (T2-FLAIR)</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="31"/>
        <source>Click on Add Data in the Welcome to Slicer Module

Click on Choose File(s) to Add and browse to the loccation of the Slicer datasets</source>
        <extracomment>19_TextBox_1</extracomment>
        <translation>Haga clic en Agregar datos en el módulo de bienvenida de Slicer

Haga clic en Elegir archivo(s) para agregar y navegue hasta la ubicación de los conjuntos de datos de Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Brain Tumor Segmentation in the Segmentation model menu</source>
        <extracomment>20_TextBox_0</extracomment>
        <translation>Seleccione el módulo MONAIAuto3DSeg e introduzca el nombre del modelo Brain Tumor Segmentation en el menú de modelos de segmentación</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="33"/>
        <source>Select the model Brain Tumor Segmentation (BRATS) GLI</source>
        <extracomment>20_TextBox_1</extracomment>
        <translation>Seleccione el modelo Brain Tumor Segmentation (BRATS) GLI</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="34"/>
        <source>Enter the input volumes as follows:

Input T2F volume: BraTS-GLI_00005-000-t12f
Input T1C volume: BraTS-GLI_00005-00-t1c
Input T1N volume: BraTS-GLI_00005-000-t1n
Input T2W volume: BraTS-GLI_00005-000-t2w


Click on Create new Segmentation on Appply

Click on Apply to start the segmentation</source>
        <extracomment>21_TextBox_0</extracomment>
        <translation>Introduzca los volúmenes de entrada de la siguiente manera: 

Volumen T2F de entrada: BraTS-GLI_00005-000-t2f 
Volumen T1C de entrada: BraTS-GLI_00005-000-t1c 
Volumen T1N de entrada: BraTS-GLI_00005-000-t1n 
Volumen T2W de entrada: BraTS-GLI_00005-000-t2w 

Haga clic en Crear nueva segmentación y luego en Aplicar

Haga clic en Aplicar para iniciar la segmentación</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="35"/>
        <source>Slicer starts running the inference task

Once the segmentation is done, &apos;Processing finished&apos; appears in the Slicer GUI</source>
        <extracomment>22_TextBox_1</extracomment>
        <translation>Slicer comienza a ejecutar la tarea de inferencia 

Una vez finalizada la segmentación, aparece el mensaje &quot;Procesamiento finalizado&quot; en la interfaz gráfica de Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Click on Show 3D to display the 3D segments in the 3D Viewer</source>
        <extracomment>23_TextBox_1</extracomment>
        <translation>Haga clic en Mostrar en 3D para visualizar los segmentos 3D en el visor 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="37"/>
        <source>AI Segmentation Task #3: Whole Body Segmentation</source>
        <extracomment>24_TextBox_0</extracomment>
        <translation>Tarea de segmentación de IA n.° 3: Segmentación de cuerpo completo</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>AI-based Segmentation of the whole body.


Dataset:
CT_ThoraxAbdomen</source>
        <extracomment>25_TextBox_1</extracomment>
        <translation>Segmentación de cuerpo completo basada en IA. 


Conjunto de datos: 
CT_ThoraxAbdomen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="39"/>
        <source>In the Add DICOM Data module, select the Patient patient1 and double click onthe image CT_Thorax_Abdomen to load it in Slicer</source>
        <extracomment>26_TextBox_0</extracomment>
        <translation>En el módulo Agregar datos DICOM, seleccione el paciente patient1 y haga doble clic en la imagen CT_Thorax_Abdomen para cargarla en Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Whole Body Segmentation in the  Segmentation model menu</source>
        <extracomment>27_TextBox_0</extracomment>
        <translation>Seleccione el módulo MONAIAuto3DSeg e introduzca el nombre del modelo Whole Body Segmentation en el menú de modelos de segmentación</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="41"/>
        <source>Select the model Whole Body Segmentation TS1-quick</source>
        <extracomment>27_TextBox_1</extracomment>
        <translation>Seleccione el modelo Whole Body Segmentation TS1-quick</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <source>Select the input Volume 6: CT_Thorax_Abdomen,

Click on Create new Segmentation on Apply

Click on Apply to start the segmentation</source>
        <extracomment>28_TextBox_0</extracomment>
        <translation>Seleccione el volumen de entrada 6: CT_Thorax_Abdomen, 

haga clic en Crear nueva segmentación en Aplicar 

y luego haga clic en Aplicar para iniciar la segmentación</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="43"/>
        <source>Slicer displays the results of the IA-based segmentation using the Whole Body Segmentation TS1-quick</source>
        <extracomment>29_TextBox_0</extracomment>
        <translation>Slicer muestra los resultados de la segmentación basada en IA utilizando el modelo Whole Body Segmentation TS1-quick</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>Conclusion</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation>Conclusión</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="45"/>
        <source>The 3D SlicerMONAIAuto3DSeg extension provides fast AI-based segmentation of anatomical and pathological structures.


The module can run on standard laptop and desktop computers with no GPU.</source>
        <extracomment>30_TextBox_1</extracomment>
        <translation>La extensión MONAIAuto3DSeg de 3D Slicer proporciona segmentación rápida basada en IA de estructuras anatómicas y patológicas. 


El módulo puede ejecutarse en laptops y computadoras de escritorio estándar sin GPU.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>Acknowledgements</source>
        <extracomment>31_TextBox_0</extracomment>
        <translation>Agradecimientos</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="47"/>
        <source>The 3D Slicer internationalization project and the 3D Slicer for Latin America project have been made possible by two CZI Essential  Open Source Software for Science (EOSS cycle 4 &amp; 5) grants.</source>
        <extracomment>31_TextBox_1</extracomment>
        <translation>El proyecto de internacionalización de 3D Slicer y el proyecto 3D Slicer para América Latina han sido posibles gracias a dos subvenciones CZI Essential Open Source Software for Science (EOSS ciclo 4 y 5).</translation>
    </message>
</context>
</TS>
