<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="es-419">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="1"/>
        <source>Basics of Data Loading and 3D Visualization in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation type="finished">Conceptos básicos sobre la carga de datos y la visualización 3D en 3D Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="2"/>
        <source>Author: Sonia Pujol, Ph.D.</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="3"/>
        <source>24/11/2024</source>
        <extracomment>0_TextBox_2</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="4"/>
        <source>Assistant Professor of Radiology Brigham and Women’s Hospital Harvard Medical School</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="5"/>
        <source>Overall Goal</source>
        <extracomment>1_TextBox_0</extracomment>
        <translation type="finished">Objetivo general</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="6"/>
        <source>This tutorial is an introduction to the basics of loading and viewing DICOM images and 3D models in 3D Slicer.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation type="finished">Este tutorial es una introducción a los conceptos básicos para cargar y visualizar imágenes DICOM y modelos 3D en 3D Slicer.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="7"/>
        <source>Learning Objectives</source>
        <extracomment>2_TextBox_0</extracomment>
        <translation type="finished">Objetivos de aprendizaje</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source> • Following this tutorial, you will be able

• to load and visualize DICOM images in Slicer

• to perform volume rendering of CT data

• to load and visualize 3D models reconstructed from MRI data</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="9"/>
        <source>Tutorial materials</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation type="finished">Materiales del tutorial</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>• 3D Slicer version 5.10

•  3D VisualizationDataSet.zip</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="11"/>
        <source>Tutorial dataset</source>
        <extracomment>4_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>The file 3DVisualizationDataset.zip contains two directories:

- dataset1_Thorax_Abdomen 
- dataset2_Head

Unzip the file 3DVisualizationDataset.zip on your computer to access the datasets</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="13"/>
        <source>Disclaimer</source>
        <extracomment>5_TextBox_0</extracomment>
        <translation type="finished">Descargo de responsabilidad</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <source>• 3D Slicer is a free open source software application distributed under a BSD style license. 


• The software is not FDA approved or CE-Marked, and is for research use only.
Tutorial Outline</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="15"/>
        <source>Tutorial Outline</source>
        <extracomment>6_TextBox_0</extracomment>
        <translation type="finished">Esquema del tutorial</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>•  Part 1: Loading and Viewing DICOM data

•  Part 2: Volume Rendering


• Part 3: Loading and Viewing 3D models</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="17"/>
        <source>Part 1: DICOM Data Loading</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="18"/>
        <source>Loading a DICOM volume</source>
        <extracomment>8_LoadingaDICOMvolume_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="19"/>
        <source>Slicer displays the user interface of the DICOM module</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>The patient1 study contains a CT Thorax Abdomen dataset</source>
        <extracomment>8_TextBox_1</extracomment>
        <translation type="finished">El estudio del paciente 1 contiene un conjunto de datos de TC de tórax y abdomen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="21"/>
        <source>Loading a DICOM volume</source>
        <extracomment>9_LoadingaDICOMvolume_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source>Select patient1 and click on Load 
to load the dataset in Slicer</source>
        <extracomment>9_ArrowText_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="23"/>
        <source>Visualizing DICOM images</source>
        <extracomment>10_VisualizingDICOMimages_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>Slicer displays the axial, coronal 
and sagittal images of the CT 
Thorax Abdomen dataset </source>
        <extracomment>10_TextBox_0</extracomment>
        <translation type="finished">Slicer muestra las imágenes axiales, coronales 
y sagitales del conjunto de datos de TC 
de tórax y abdomen </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="25"/>
        <source>Visualizing DICOM images</source>
        <extracomment>11_VisualizingDICOMimages_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>Left click on DICOM to display 
the list of modules of Slicer</source>
        <extracomment>11_ArrowText_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="27"/>
        <source>Select the module 
Volumes</source>
        <extracomment>11_ArrowText_2</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <source>Visualizing DICOM images</source>
        <extracomment>12_VisualizingDICOMimages_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="29"/>
        <source>Click on the CT-abdomen 
preset to automatically adjust 
the window/level display of the 
CT dataset</source>
        <extracomment>12_ArrowText_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <source>Visualizing DICOM images</source>
        <extracomment>13_VisualizingDICOMimages_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="31"/>
        <source>Position the mouse cursor 
over the red banner in the 
Red Viewer to display the slice 
menu.


Click on the Links icon to link 
the slice controls across all 
Slice Viewers. 


Click on the Eye icon to
display the three anatomical 
slices in the 3D Viewer</source>
        <extracomment>13_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>Visualizing DICOM images</source>
        <extracomment>14_VisualizingDICOMimages_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="33"/>
        <source>The three anatomical slices 
appear in the 3D viewer.</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="34"/>
        <source>Visualizing DICOM images</source>
        <extracomment>15_VisualizingDICOMimages_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="35"/>
        <source>Click on the Slicer layout menu 
icon, and select the 
Conventional Widescreen layout</source>
        <extracomment>15_ArrowText_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Visualizing DICOM images</source>
        <extracomment>16_VisualizingDICOMimages_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="37"/>
        <source>Slicer switches the layout 
to Conventional 
Widescreen layout</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation type="finished">Slicer cambia el diseño 
a diseño convencional 
de pantalla panorámica</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>Visualizing DICOM images</source>
        <extracomment>17_VisualizingDICOMimages_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="39"/>
        <source>Use the right mouse button in the 
3D Viewer to zoom in and out</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation type="finished">Utilice el botón derecho del mouse en el 
visor 3D para acercar y alejar la imagen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Visualizing DICOM images</source>
        <extracomment>18_VisualizingDICOMimages_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="41"/>
        <source>Use the left mouse button in the 
3D Viewer to rotate the images</source>
        <extracomment>18_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <source>3D Viewer Controller</source>
        <extracomment>19_3DViewerController_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="43"/>
        <source>Position the mouse cursor over 
the pin icon in the blue banner 
of the 3D viewer window to 
display the 3DView controller

Click on the second icon on the 
top row of the 3DView 
controller to center the 3D view 
on the scene</source>
        <extracomment>19_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>3D Viewer Controller</source>
        <extracomment>20_3DViewerController_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="45"/>
        <source>Select the Volume Rendering 
module in the list of modules </source>
        <extracomment>20_ArrowText_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>Part 2: Volume Rendering</source>
        <extracomment>21_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="47"/>
        <source>Volume Rendering</source>
        <extracomment>22_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="48"/>
        <source>• Volume rendering 
techniques enable 3D 
visualization of 3D 
datasets

• The Volume Rendering 
module in Slicer enables 
interactive 3D visualization 
of DICOM images</source>
        <extracomment>22_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="49"/>
        <source>Volume Rendering</source>
        <extracomment>23_VolumeRendering_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="50"/>
        <source>Click on Preset in the Display tab 
and select the preset CT-Cardiac3 </source>
        <extracomment>23_ArrowText_0</extracomment>
        <translation type="finished">Haga clic en Preajuste en la pestaña Pantalla 
y seleccione el preajuste TC-Cardiac3 </translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="51"/>
        <source>Volume Rendering</source>
        <extracomment>24_VolumeRendering_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="52"/>
        <source>Select VTK GPU Ray Casting Rendering
Click on the eye icon in the Volume tab to display 
the volume rendered image in the 3D viewer</source>
        <extracomment>24_TextBox_2</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="53"/>
        <source>Volume Rendering</source>
        <extracomment>25_VolumeRendering_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>Use the shift slider to 
change the transfer 
function and display the
aorta</source>
        <extracomment>25_ArrowText_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="55"/>
        <source>Volume Rendering</source>
        <extracomment>26_VolumeRendering_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="56"/>
        <source>Click on Display ROI to 
display a region of interest 
(ROI) in the 3D viewer and 
check the option Enable</source>
        <extracomment>26_ArrowText_0</extracomment>
        <translation type="finished">Haga clic en Mostrar ROI para 
mostrar una región de interés 
(ROI) en el visor 3D y 
marque la opción Activar</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="57"/>
        <source>Volume Rendering</source>
        <extracomment>27_VolumeRendering_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Turn off the visibility of the 
axial, sagittal and coronal 
slices in the 2D viewer 


Position the ROI around the 
left kidney using the color 
handles</source>
        <extracomment>27_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="59"/>
        <source>Volume Rendering</source>
        <extracomment>28_VolumeRendering_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="60"/>
        <source>Click on the eye icon to 
display the volume rendered 
image</source>
        <extracomment>28_ArrowText_0</extracomment>
        <translation type="finished">Haga clic en el icono del ojo para 
mostrar la imagen con volumen renderizado</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="61"/>
        <source>Volume Rendering</source>
        <extracomment>29_VolumeRendering_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="62"/>
        <source>Slicer displays the 
volume rendered 
image of the left kidney </source>
        <extracomment>29_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="63"/>
        <source>Volume Rendering</source>
        <extracomment>30_VolumeRendering_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="64"/>
        <source>Extend the ROI to generate 
a volume rendered image of 
the right kidney</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation type="finished">Amplíe el ROI para generar 
una imagen renderizada en volumen 
del riñón derecho</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="65"/>
        <source>Volume Rendering</source>
        <extracomment>31_VolumeRendering_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="66"/>
        <source>Click on File, then Close Scene
in the main menu</source>
        <extracomment>31_ArrowText_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="67"/>
        <source>Part 3: Loading and 
viewing 3D models
</source>
        <extracomment>32_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="68"/>
        <source>Tutorial dataset</source>
        <extracomment>33_TextBox_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="69"/>
        <source>• The directory dataset2_Head contains the Slicer scene called Head_scene.mrb

• The scene contains 3D models from the SPL brain atlas developed by the department of Radiology at Brigham and Women’s Hospital, Harvard Medical School (NIH P41 RR013218, NIH R01 MH05074)</source>
        <extracomment>33_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="70"/>
        <source>Slicer Scene</source>
        <extracomment>34_TextBox_0</extracomment>
        <translation type="finished">Escena de Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="71"/>
        <source>Slicer stores all loaded data in a repository called a scene


Each data set, such as an image volume, surface model, or point set, is represented as a node in a Slicer scene.


All Slicer modules operate on the data stored in a Slicer scene.</source>
        <extracomment>34_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>Loading a Scene</source>
        <extracomment>35_LoadingaScene_title</extracomment>
        <translation type="finished">Cargando escena</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="73"/>
        <source>Slicer displays a 3D 
surface model of the 
head and 2D MRI slices</source>
        <extracomment>35_TextBox_0</extracomment>
        <translation type="finished">Slicer muestra un 
modelo de superficie 3D de la 
cabeza y cortes de resonancia magnética 2D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="74"/>
        <source>Viewing 3D models</source>
        <extracomment>36_Viewing3Dmodels_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="75"/>
        <source>Position the cursor over 
the pin icon to reveal the 
slice menu and click on 
the eye icon to display the 
axial slice in the 3D viewer</source>
        <extracomment>36_ArrowText_0</extracomment>
        <translation type="finished">Coloque el cursor sobre 
el icono del alfiler para mostrar el 
menú de cortes y haga clic en 
el icono del ojo para mostrar el 
corte axial en el visor 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Viewing 3D models</source>
        <extracomment>37_Viewing3Dmodels_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="77"/>
        <source>Select the Models module 
in the list of models</source>
        <extracomment>37_ArrowText_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="78"/>
        <source>Viewing 3D models</source>
        <extracomment>38_Viewing3Dmodels_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="79"/>
        <source>Lower the opacity of 
the Skin model using 
the visibility slider</source>
        <extracomment>38_ArrowText_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>The skull bone and 
eyeballs models appear 
through the skin</source>
        <extracomment>38_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="81"/>
        <source>Viewing 3D models</source>
        <extracomment>39_Viewing3Dmodels_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="82"/>
        <source>Slicer displays the list of 
3D models loaded in the 
scene

Select the model Skin.vtk</source>
        <extracomment>39_ArrowText_0</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="83"/>
        <source>Viewing 3D models</source>
        <extracomment>40_Viewing3Dmodels_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>Select the skull bone 
model and click on the 
eye icon to turn off its 
visibility</source>
        <extracomment>40_ArrowText_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="85"/>
        <source>The white matter and 
optic nerve models 
appear through the skin</source>
        <extracomment>40_TextBox_2</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="86"/>
        <source>Interacting with 3D models</source>
        <extracomment>41_Interactingwith3Dmodels_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="87"/>
        <source>Click on the eye icon to 
display the coronal slice 
in the 3D viewer</source>
        <extracomment>41_ArrowText_0</extracomment>
        <translation type="finished">Haga clic en el icono del ojo para 
mostrar el corte coronal 
en el visor 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Interacting with 3D models</source>
        <extracomment>42_Interactingwith3Dmodels_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="89"/>
        <source>Select the hemispheric 
white matter model and 
select the option Clipping</source>
        <extracomment>42_ArrowText_2</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="90"/>
        <source>Interacting with 3D models</source>
        <extracomment>43_Interactingwith3Dmodels_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="91"/>
        <source>Move the coronal slice 
posteriorily to display the 
optic chiasm</source>
        <extracomment>43_TextBox_0</extracomment>
        <translation type="finished">Mueva el corte coronal 
hacia atrás para visualizar el 
quiasma óptico</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="92"/>
        <source>Interacting with 3D models</source>
        <extracomment>44_Interactingwith3Dmodels_title</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="93"/>
        <source>Slicer displays a 3D view of 
the optic chiasm</source>
        <extracomment>44_TextBox_0</extracomment>
        <translation type="finished">Slicer muestra una vista en 3D del 
chiasma óptico</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="94"/>
        <source>Conclusion</source>
        <extracomment>45_TextBox_0</extracomment>
        <translation type="finished">Conclusión</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="95"/>
        <source>• 3D Slicer provides advanced functionalities for loading and viewing 3D medical imaging data

• The tutorial demonstrates how to use volume 
rendering and 3D surface modeling for 
interactive visualization of CT and MRI data


Contact: spujol@bwh.harvard.edu</source>
        <extracomment>45_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>Acknowledgements</source>
        <extracomment>46_TextBox_0</extracomment>
        <translation type="finished">Agradecimientos</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="97"/>
        <source>Neuroimage Analysis Center (NIBIB P41 EB015902)</source>
        <extracomment>46_TextBox_1</extracomment>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
