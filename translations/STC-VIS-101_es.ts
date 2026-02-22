<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es">
<context>
    <name>Main</name>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>Basics of Data Loading and 3D Visualization in 3D Slicer </source>
        <extracomment>0_TextBox_0</extracomment>
        <translation>Conceptos básicos de carga de datos y visualización 3D en 3D Slicer </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>Sonia Pujol, Ph.D.</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation>Sonia Pujol, Ph.D.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>Director of  3D Slicer Training &amp; Education</source>
        <extracomment>0_TextBox_2</extracomment>
        <translation>Director de Formación y Educación de 3D Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <source>Assistant Professor of Radiology
Brigham and Women’s Hospital
Harvard Medical Schoo</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation>Profesor Adjunto de Radiología
Hospital Brigham and Women&apos;s
Facultad de Medicina de Harvard</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <location filename="text_dict_default.json" line="20"/>
        <source>Overall Goal </source>
        <extracomment>1_TextBox_0
----------
2_TextBox_0</extracomment>
        <translation>Objetivo general </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="18"/>
        <source>This tutorial is an introduction to the basics of loading and viewing DICOM images and 3D models in 3D Slicer.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation>Este tutorial es una introducción a los conceptos básicos de carga y visualización de imágenes DICOM y modelos 3D en 3D Slicer.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source>Following this tutorial, you will be able 
• to load and visualize DICOM images in Slicer  
• to perform volume rendering of CT datas
• to load and visualize 3D models reconstructed 
from MRI data</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation>Siguiendo este tutorial, podrá:
• cargar y visualizar imágenes DICOM en Slicer
• realizar representación volumétrico de datos de TC
• cargar y visualizar modelos 3D reconstruidos a partir
de datos de MRI</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>Tutorial materials</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation>Materiales tutoriales</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>3D Slicer version 4.11.0
3DVisualizationDataset.zip</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation>3D Slicer versión 4.11.0
3DVisualizationDataset.zip</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <location filename="text_dict_default.json" line="158"/>
        <source>Tutorial dataset</source>
        <extracomment>4_TextBox_0
----------
36_TextBox_0</extracomment>
        <translation>Conjunto de datos del tutorial</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <source>The file 3DVisualizationDataset.zip contains 
two directories: 
– dataset1_Thorax_Abdomen
– dataset2_Head
Unzip the file 3DVisualizationDataset.zip on 
your computer to access the datasets</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation>El archivo 3DVisualizationDataset.zip contiene
dos directorios: 
– dataset1_Thorax_Abdomen
– dataset2_Head
Descomprima el archivo 3DVisualizationDataset.zip
en su computadora para acceder a los conjuntos de datos</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>Disclaimer</source>
        <extracomment>5_TextBox_0</extracomment>
        <translation>Descargo de responsabilidad</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="34"/>
        <source>3D Slicer is a free open source software 
application distributed under a BSD style license.
The software is not FDA approved or CE-Marked, 
and is for research use only.</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation>3D Slicer es una aplicación gratuita de código abierto
distribuida bajo una licencia tipo BSD. El software no
cuenta con la aprobación de la FDA ni el marcado CE, y
su uso es exclusivo para investigación.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Tutorial Outline</source>
        <extracomment>6_TextBox_0</extracomment>
        <translation>Esquema del tutorial</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>Part 1: Loading and Viewing DICOM data

Part 2: Volume Rendering

Part 3: Loading and Viewing 3D models</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation>Parte 1: Carga y visualización de datos DICOM

Parte 2: Renderizado de volumen

Parte 3: Carga y visualización de modelos 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Part 1 DICOM Data Loading</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation>Parte 1 Carga de datos DICOM</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <location filename="text_dict_default.json" line="46"/>
        <location filename="text_dict_default.json" line="50"/>
        <location filename="text_dict_default.json" line="56"/>
        <location filename="text_dict_default.json" line="60"/>
        <location filename="text_dict_default.json" line="64"/>
        <location filename="text_dict_default.json" line="70"/>
        <location filename="text_dict_default.json" line="74"/>
        <location filename="text_dict_default.json" line="82"/>
        <source>Loading a DICOM volume</source>
        <extracomment>8_LoadingaDICOMvolume_title
----------
9_LoadingaDICOMvolume_title
----------
10_LoadingaDICOMvolume_title
----------
11_LoadingaDICOMvolume_title
----------
12_LoadingaDICOMvolume_title
----------
13_LoadingaDICOMvolume_title
----------
14_LoadingaDICOMvolume_title
----------
15_LoadingaDICOMvolume_title
----------
16_LoadingaDICOMvolume_title</extracomment>
        <translation>Cargar un volumen DICOM</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>Drag and drop the directory
dataset1_Thorax_Abdomen
into Slicer</source>
        <extracomment>8_ArrowText_0</extracomment>
        <translation>Arrastre y suelte el directorio
dataset1_Thorax_Abdomen
en Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="48"/>
        <source>Click on OK to load 
the directory in the 
DICOM database</source>
        <extracomment>9_TextBox_0</extracomment>
        <translation>Haga clic en Aceptar para
cargar el directorio en la
base de datos DICOM</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="52"/>
        <source>Slicer displays the user 
interface of the DICOM 
module</source>
        <extracomment>10_TextBox_0</extracomment>
        <translation>Slicer muestra la interfaz
de usuario del módulo
 DICOM</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>The patient1 study contains a CT Thorax Abdomen dataset</source>
        <extracomment>10_TextBox_1</extracomment>
        <translation>El estudio patient1 contiene un conjunto de datos de TC de Tórax y Abdomen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Select patient1 and click on Load
to load the dataset in Slicer</source>
        <extracomment>11_ArrowText_1</extracomment>
        <translation>Seleccione el paciente 1 y pulse en Cargar
para cargar el conjunto de datos en Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="62"/>
        <source>Slicer displays the axial, coronal 
and sagittal images of the CT 
Thorax Abdomen dataset 
</source>
        <extracomment>12_TextBox_0</extracomment>
        <translation>Slicer muestra las imágenes axiales,
coronales y sagitales del conjunto de
datos de TC de tórax y abdomen 
</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="66"/>
        <source>Select the module 
Volumes</source>
        <extracomment>13_ArrowText_1</extracomment>
        <translation>Seleccione el módulo
Volúmenes</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="68"/>
        <source>Left click on DICOM to display 
the list of modules of Slicer </source>
        <extracomment>13_TextBox_2</extracomment>
        <translation>Pulse al izquierdo en DICOM para
mostrar la lista de módulos de Slicer. </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>Click on the CT-abdomen 
preset to automatically adjust 
the window/level display of the 
CT dataset </source>
        <extracomment>14_ArrowText_0</extracomment>
        <translation>Pulse en el CT-abdomen
preseleccione a ajuste automático
la ventana/nivel exhibido del
conjunto de datos CT </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Position the mouse cursor 
over the red banner in the 
Red Viewer to display the slice 
menu.</source>
        <extracomment>15_ArrowText_0</extracomment>
        <translation>Posición del cursor de ratón
sobre la pancarta roja en el
Visor Rojo para exhibir el
menú de la rebanada.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="78"/>
        <source>Click on the Links icon to link 
the slice controls across all 
Slice Viewers. </source>
        <extracomment>15_ArrowText_1</extracomment>
        <translation>Pulsa en el icono de Enlaces 
para vincular los controles de 
corte en todos los Visores de Cortes. </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>Click on the Eye icon to
display the three anatomical 
slices in the 3D Viewer</source>
        <extracomment>15_ArrowText_2</extracomment>
        <translation>Pulse en el icono del ojo para
visualizar los tres cortes anatómicos
en el visor 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>The three anatomical slices 
appear in the 3D viewer. </source>
        <extracomment>16_TextBox_0</extracomment>
        <translation>Los tres cortes anatómicos
aparecen en el visor 3D. </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="86"/>
        <location filename="text_dict_default.json" line="90"/>
        <source>Visualizing DICOM images</source>
        <extracomment>17_VisualizingDICOMimages_title
----------
18_VisualizingDICOMimages_title</extracomment>
        <translation>Visualizar imágenes DICOM</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Click on the Slicer layout menu 
icon, and select the 
Conventional Widescreen layout </source>
        <extracomment>17_ArrowText_1</extracomment>
        <translation>Pulse en el icono del menú de diseño
de la segmentación de datos y seleccione
el diseño de pantalla ancha convencional </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="92"/>
        <source>Slicer switches the layout 
to Conventional 
Widescreen layout</source>
        <extracomment>18_TextBox_0</extracomment>
        <translation>Slicer cambia el distribución a
Pantalla Ancha Convencional</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="94"/>
        <location filename="text_dict_default.json" line="98"/>
        <source>Visualizing DICOM image</source>
        <extracomment>19_VisualizingDICOMimage_title
----------
20_VisualizingDICOMimage_title</extracomment>
        <translation>Visualizando imagen DICOM</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>Use the right mouse button in the 
3D Viewer to zoom in and out</source>
        <extracomment>19_TextBox_0</extracomment>
        <translation>Utilice el botón rojo del ratón en
el Visor 3D para ampliar y reducir</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="100"/>
        <source>Use the left mouse button in the 
3D Viewer to rotate the images </source>
        <extracomment>20_TextBox_0</extracomment>
        <translation>Utilice al botón izquierdo del ratón
en el Visor 3D para rotar las imágenes </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="102"/>
        <location filename="text_dict_default.json" line="106"/>
        <source>3D Viewer Controller</source>
        <extracomment>21_3DViewerController_title
----------
22_3DViewerController_title</extracomment>
        <translation>Controlador del Visor 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="104"/>
        <source>Position the mouse cursor over 
the pin icon in the blue banner 
of the 3D viewer window to 
display the 3DView controller
Click on the second icon on the 
top row of the 3DView 
controller to center the 3D view 
on the scene</source>
        <extracomment>21_TextBox_0</extracomment>
        <translation>Coloque el cursor del ratón sobre
el icono de chincheta en la pancarta
azul de la ventana del visor 3D para
mostrar el controlador de vista 3D.
Pulse en el segundo icono de la fila
superior del controlador de vista 3D
para centrar la vista 3D en la escena</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="108"/>
        <source>Select the Volumen Rendering
module in the list of modules</source>
        <extracomment>22_TextBox_0</extracomment>
        <translation>Seleccione el módulo del Volumen
Representado en el listado de módulos</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="110"/>
        <source>Part 2
Volume Rendering</source>
        <extracomment>23_TextBox_0</extracomment>
        <translation>Parte 2
Representar Volumen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="112"/>
        <location filename="text_dict_default.json" line="116"/>
        <location filename="text_dict_default.json" line="120"/>
        <location filename="text_dict_default.json" line="124"/>
        <location filename="text_dict_default.json" line="128"/>
        <location filename="text_dict_default.json" line="132"/>
        <location filename="text_dict_default.json" line="136"/>
        <location filename="text_dict_default.json" line="140"/>
        <location filename="text_dict_default.json" line="144"/>
        <location filename="text_dict_default.json" line="148"/>
        <source>Volume Rendering</source>
        <extracomment>24_TextBox_0
----------
25_VolumeRendering_title
----------
26_VolumeRendering_title
----------
27_VolumeRendering_title
----------
28_VolumeRendering_title
----------
29_VolumeRendering_title
----------
30_VolumeRendering_title
----------
31_VolumeRendering_title
----------
32_VolumeRendering_title
----------
33_VolumeRendering_title</extracomment>
        <translation>Representación de Volumen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="114"/>
        <source>-Volume rendering 
techniques enable 3D 
visualization of 3D 
datasets
-The Volume Rendering 
module in Slicer enables 
interactive 3D visualization 
of DICOM images </source>
        <extracomment>24_TextBox_1</extracomment>
        <translation>-Técnicas de representar
el volumen habilita 
visualización en 3D del
conjunto de datos
-El módulo de 
Representación de Volumen
en Slice habilita la visualización
interactiva de visualización en 3D
de imágenes DICOM </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="118"/>
        <source>Click on Preset in the Display tab 
and select the preset CT-Cardiac3</source>
        <extracomment>25_TextBox_0</extracomment>
        <translation>Pulse en Preajuste en la pestaña Pantalla y
seleccione el preajuste CT-Cardiac3</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="122"/>
        <source>Select VTK GPU Ray Casting Rendering
Click on the eye icon in the Volume tab to display 
the volume rendered image in the 3D viewer</source>
        <extracomment>26_TextBox_2</extracomment>
        <translation>Seleccione Representación de Ray Casting por GPU VTK.
Pulse en el icono del ojo en la pestaña Volumen para exhibir
la imagen representada del volumen en el visor 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="126"/>
        <source>Use the shift slider to 
change the transfer 
function and display the 
aorta</source>
        <extracomment>27_ArrowText_0</extracomment>
        <translation>Utilice el control deslizante de
desplazamiento para cambiar la
función de transferencia y exhibir
la aorta</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="130"/>
        <source>Click on Display ROI to 
display a region of interest 
(ROI) in the 3D viewer and 
check the option Enable</source>
        <extracomment>28_ArrowText_0</extracomment>
        <translation>Pulse en Mostrar ROI para
mostrar una región de interés
(ROI) en el visor 3D y marque
la opción Habilitar</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="134"/>
        <source>Turn off the visibility of the 
axial, sagittal and coronal 
slices in the 2D viewer 
Position the ROI around the 
left kidney using the color 
handles</source>
        <extracomment>29_ArrowText_0</extracomment>
        <translation>Apaga la visibilidad de los
cortes axial, sagital y coronal
en el visor 2D. Coloque la ROI
alrededor del riñón izquierdo
usando los controles de color</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="138"/>
        <source>Click on the eye icon to 
display the volume rendered 
image</source>
        <extracomment>30_ArrowText_0</extracomment>
        <translation>Pulse en el icono del ojo
para mostrar la imagen del
volumen representado</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="142"/>
        <source>Slicer displays the 
volume rendered 
image of the left kidney </source>
        <extracomment>31_TextBox_0</extracomment>
        <translation>Slicer exhibe la imagen
representada por volumen
del riñón izquierdo </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="146"/>
        <source>Extend the ROI to generate 
a volume rendered image of 
the right kidney</source>
        <extracomment>32_TextBox_0</extracomment>
        <translation>Ampliar la ROI para generar
una imagen representada en
volumen del riñón derecho</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="150"/>
        <source>Click on File <byte value="x1a"></byte> Close Scene in the main menu</source>
        <extracomment>33_TextBox_0</extracomment>
        <translation>Pulse en el Archivo </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="152"/>
        <source>Part 3
Loading and viewing 3D models</source>
        <extracomment>34_TextBox_0</extracomment>
        <translation>Parte 3
Cargar y ver modelos 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="154"/>
        <source>Slicer Scene</source>
        <extracomment>35_TextBox_0</extracomment>
        <translation>Escena Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="156"/>
        <source>*Slicer stores all loaded data in a repository called a scene

*Each data set, such as an image volume, surface model, or point set, is represented as a node in a Slicer scene.

*All Slicer modules operate on the data stored in a Slicer scene</source>
        <extracomment>35_TextBox_1</extracomment>
        <translation>*Slicer almacena todos los datos cargados en un repositorio llamado escena

*Cada conjunto de datos, como un volumen de imagen, un modelo de superficie o un conjunto de puntos, se representa como un nodo en una escena de Slicer.

*Todos los módulos de Slicer operan con los datos almacenados en una escena de Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="160"/>
        <source>*The directory dataset2_Head 
contains the Slicer scene called 
Head_scene.mrb 

*The scene contains 3D models 
from the SPL brain atlas developed 
by the department of Radiology at 
Brigham and Women’s Hospital, 
Harvard Medical School (NIH P41 
RR013218, NIH R01 MH05074)</source>
        <extracomment>36_TextBox_1</extracomment>
        <translation>*El directorio dataset2_Head contiene
la escena de Slicer llamada
Head_scene.mrb

*Esta escena contiene modelos 3D
del atlas cerebral SPL desarrollado
por el Departamento de Radiología
del Hospital Brigham and Women’s
de la Facultad de Medicina de Harvard
(NIH P41 RR013218, NIH R01 MH05074)</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="162"/>
        <location filename="text_dict_default.json" line="166"/>
        <source>Loading a Scene</source>
        <extracomment>37_LoadingaScene_title
----------
38_LoadingaScene_title</extracomment>
        <translation>Cargando una Escena</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="164"/>
        <source>Drag and drop the file 
Head_Scene.mrb located in 
the dataset2_Head directory 
into Slicer</source>
        <extracomment>37_ArrowText_0</extracomment>
        <translation>Arrastre y suelte el archivo
Head_Scene.mrb, ubicado en
el directorio dataset2_Head,
en Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="168"/>
        <source>Slicer displays a 3D 
surface model of the 
head and 2D MRI slices</source>
        <extracomment>38_TextBox_0</extracomment>
        <translation>Slicer exhibe un modelo de
superficie 3D de la cabeza y cortes
de resonancia magnética 2D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="170"/>
        <location filename="text_dict_default.json" line="174"/>
        <location filename="text_dict_default.json" line="178"/>
        <source>Viewing 3D models</source>
        <extracomment>39_Viewing3Dmodels_title
----------
40_Viewing3Dmodels_title
----------
41_Viewing3Dmodels_title</extracomment>
        <translation>Viendo modelos 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="172"/>
        <source>Position the cursor over 
the pin icon to reveal the 
slice menu and click on 
the eye icon to display the 
axial slice in the 3D viewer</source>
        <extracomment>39_ArrowText_0</extracomment>
        <translation>Coloque el cursor sobre el
icono del alfiler para abrir el
menú de cortes y pulse sobre
el icono del ojo para ver el
corte axial en el visor 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="176"/>
        <source>Select the Models module 
in the list of models </source>
        <extracomment>40_ArrowText_0</extracomment>
        <translation>Selecciona los Modelos del 
módulo en el listado de modelos </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="180"/>
        <source>Slicer displays the list of 
3D models loaded in the 
scene
Select the model Skin.vtk</source>
        <extracomment>41_ArrowText_0</extracomment>
        <translation>Slicer muestra el listado de
modelos 3D cargados en la
escena.
Seleccione el modelo Skin.vtk</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="182"/>
        <location filename="text_dict_default.json" line="188"/>
        <location filename="text_dict_default.json" line="194"/>
        <location filename="text_dict_default.json" line="198"/>
        <location filename="text_dict_default.json" line="202"/>
        <location filename="text_dict_default.json" line="206"/>
        <source>Interacting with 3D models</source>
        <extracomment>42_Interactingwith3Dmodels_title
----------
43_Interactingwith3Dmodels_title
----------
44_Interactingwith3Dmodels_title
----------
45_Interactingwith3Dmodels_title
----------
46_Interactingwith3Dmodels_title
----------
47_Interactingwith3Dmodels_title</extracomment>
        <translation>Interactuar con modelos 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="184"/>
        <source>Lower the opacity of 
the Skin model using 
the visibility slider</source>
        <extracomment>42_ArrowText_0</extracomment>
        <translation>Disminuya la opacidad
del modelo de piel con
el control deslizante de
visibilidad</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="186"/>
        <source>The skull bone and 
eyeballs models appear 
through the skin</source>
        <extracomment>42_TextBox_1</extracomment>
        <translation>Los modelos de huesos
del cráneo y globos oculares
aparecen a través de la piel</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="190"/>
        <source>The white matter and 
optic nerve models 
appear through the skin</source>
        <extracomment>43_TextBox_0</extracomment>
        <translation>Los modelos de sustancia
blanca y nervio óptico
aparecen a través de la piel</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="192"/>
        <source>Select the skull bone 
model and click on the 
eye icon to turn off its 
visibility</source>
        <extracomment>43_ArrowText_1</extracomment>
        <translation>Seleccione el modelo del
hueso del cráneo y pulse
en el icono del ojo para
desactivar su visibilidad</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="196"/>
        <source>Click on the eye icon to 
display the coronal slice 
in the 3D viewer</source>
        <extracomment>44_ArrowText_0</extracomment>
        <translation>Pulse en el icono del ojo
para visualizar el corte
coronal en el visor 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="200"/>
        <source>Select the hemispheric 
white matter model and 
select the option Clipping</source>
        <extracomment>45_ArrowText_0</extracomment>
        <translation>Seleccione el modelo de
materia blanca hemisférico y
seleccione la opción Recorte</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="204"/>
        <source>Move the coronal slice 
posteriorily to display the 
optic chiasm</source>
        <extracomment>46_TextBox_0</extracomment>
        <translation>Mueva el corte coronal
posteriormente para visualizar
el quiasma óptico</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="208"/>
        <source>Slicer displays a 3D view of 
the optic chiasm</source>
        <extracomment>47_TextBox_0</extracomment>
        <translation>Slicer exhibe una vista 3D
del quiasma óptico</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="210"/>
        <source>Acknowledgements</source>
        <extracomment>48_TextBox_0</extracomment>
        <translation>Agradecimientos</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="212"/>
        <source>Neuroimage Analysis 
Center 
(NIBIB P41 EB015902)</source>
        <extracomment>48_TextBox_1</extracomment>
        <translation>Dentro de Análisis
Neuroimage 
(NIBIB P41 EB015902)</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="214"/>
        <source>Conclusion</source>
        <extracomment>49_TextBox_0</extracomment>
        <translation>Conclusión</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="216"/>
        <source>*3D Slicer provides advanced functionalities for 
loading and viewing 3D medical imaging data

*The tutorial demonstrates how to use volume 
rendering and 3D surface modeling for 
interactive visualization of CT and MRI data

Contact: spujol@bwh.harvard.edu</source>
        <extracomment>49_TextBox_1</extracomment>
        <translation>*3D Slicer ofrece funciones avanzadas para cargar y
visualizar datos de imágenes médicas en 3D.

*El tutorial muestra cómo usar la representación
volumétrica y el modelado de superficies en 3D
para la visualización interactiva de datos de TC y RM.

Contacto: spujol@bwh.harvard.edu</translation>
    </message>
</context>
</TS>
