<?xml version="1.0" encoding="utf-8"?>
<TS version="2.1" language="fr">
<context>
    <name>TutorialMaker</name>
    <message>
        <location filename="text_dict_default.json" line="8"/>
        <source>AI-based Segmentation in 3D Slicer</source>
        <extracomment>0_TextBox_0</extracomment>
        <translation type="vanished">AIBasedSegmentationIn3DSlicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="10"/>
        <source>Sonia Pujol, Ph. D. 
Brigham and Women&apos;s Hospital,
Harvard Medical School
Boston, MA</source>
        <extracomment>0_TextBox_1</extracomment>
        <translation type="vanished">Sonia Pujol, Ph.D.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="12"/>
        <source>Slicer Ribeirão Preto Workshop
June 30, 2025</source>
        <extracomment>0_TextBox_3</extracomment>
        <translation type="vanished">Segmentation basée sur l&apos;IA dans 3D Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="14"/>
        <location filename="text_dict_default.json" line="18"/>
        <source>Manual vs AI-powered Segmentation</source>
        <extracomment>1_TextBox_0
----------
2_TextBox_0</extracomment>
        <translation>Segmentation manuelle vs segmentation assistée par IA</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="16"/>
        <source>Medical images have traditionally been manually segmented, which is a time-consuming process that requires intensive effort by radiologists and is subject to inter-reader variability.</source>
        <extracomment>1_TextBox_1</extracomment>
        <translation type="vanished">Cliquez sur Add Data dans le module Welcome to Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="20"/>
        <source>In the past decade, image segmentation has been powered by the development of deep learning algorithms (e.g. nnUnet by the German Cancer Research Center (DKFZ)/Helmholtz Research).


AI-powered segmentation tools can reduce the segmentation time and provide more reproducible results.</source>
        <extracomment>2_TextBox_1</extracomment>
        <translation>Au cours de la dernière décennie, la segmentation d’images a été révolutionnée par le développement d’algorithmes de deep learning (par exemple nnUnet développé par le German Cancer Research Center (DKFZ)/Helmholtz Research).


Les outils de segmentation assistés par IA peuvent réduire le temps de segmentation et fournir des résultats plus reproductibles.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="22"/>
        <source>AI Terminology</source>
        <extracomment>3_TextBox_0</extracomment>
        <translation>Terminologie de l’IA</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="24"/>
        <source>A Model is an AI algorithm that was trained to perform a specific task (e.g. brain tumor segmentation model).

The Weights of an AI model are small numbers that determine how much importance the model gives to different image features.

During the Training phase, a model learns patterns from data labelled by experts and adjusts its weights to improve its predictions.

During the Validation/Test phase, the model is evaluated on a separate set of data not used during the Training phase.

During Inference, the model is applied to new datasets to perform the specific task it was trained for.</source>
        <extracomment>3_TextBox_1</extracomment>
        <translation>Un modèle est un algorithme d’IA entraîné pour accomplir une tâche spécifique (par exemple, un modèle de segmentation de tumeur cérébrale).

Les poids d’un modèle d’IA sont de petits nombres qui déterminent l’importance que le modèle attribue aux différentes caractéristiques de l’image.

Lors de la phase d’entraînement, un modèle apprend des motifs à partir de données étiquetées par des experts et ajuste ses poids pour améliorer ses prédictions.

Lors de la phase de Validation/Test, le modèle est évalué sur un ensemble de données distinct, non utilisé pendant l’entraînement.

Lors de l’inférence, le modèle est appliqué à de nouveaux jeux de données pour réaliser la tâche spécifique pour laquelle il a été entraîné.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="26"/>
        <source>3D Slicer AI Tutorial</source>
        <extracomment>4_TextBox_0</extracomment>
        <translation>Tutoriel IA 3D Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="28"/>
        <source>This tutorial focuses on running inference tasks using various pre-trained AI models for automated segmentation of anatomical and pathological structures.</source>
        <extracomment>4_TextBox_1</extracomment>
        <translation>Ce tutoriel se concentre sur l’exécution de tâches d’inférence en utilisant différents modèles d’IA pré-entraînés pour la segmentation automatisée de structures anatomiques et pathologiques.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="30"/>
        <location filename="text_dict_default.json" line="34"/>
        <source>MONAIAuto3DSeg Slicer extension</source>
        <extracomment>5_TextBox_0
----------
6_TextBox_0</extracomment>
        <translation>Extension Slicer MONAIAuto3DSeg</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="32"/>
        <source>This tutorial uses the pre-trained models of the MONAIAuto3DSeg Slicer extension.


The tool is designed to work on laptops or on average desktop computer without a GPU.</source>
        <extracomment>5_TextBox_1</extracomment>
        <translation>Ce tutoriel utilise les modèles pré-entraînés de l’extension Slicer MONAIAuto3DSeg.


L’outil est conçu pour fonctionner sur des ordinateurs portables ou des ordinateurs de bureau standards sans GPU.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="36"/>
        <source>Multiple modalities Support (CT, MRI).


Multiple anatomies (head, thorax, abdomen, pelvis, etc.).


Multiple pathologies (tumor, hemorrhage, edema).</source>
        <extracomment>6_TextBox_1</extracomment>
        <translation type="vanished">Cliquez sur Create new segmentation sur Apply</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="38"/>
        <source>Slicer AI Tutorial: Segmentation Tasks</source>
        <extracomment>7_TextBox_0</extracomment>
        <translation>Tutoriel IA Slicer&#xa0;: Tâches de segmentation</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="40"/>
        <source>Segmentation Task #1: Prostate 


Segmentation Task #2: Brain Glioma 


Segmentation Task #3: Whole Body Segmentation</source>
        <extracomment>7_TextBox_1</extracomment>
        <translation>Tâche de segmentation #1&#xa0;: Prostate


Tâche de segmentation #2&#xa0;: Gliome cérébral


Tâche de segmentation #3&#xa0;: Segmentation du corps entier</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="42"/>
        <source>AI Segmentation Task #1: Prostate</source>
        <extracomment>8_TextBox_0</extracomment>
        <translation type="vanished">Slicer affiche le résultat de la segmentation de la prostate basée sur l’IA</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="44"/>
        <source>AI-based Segmentation of Peripheral Zone (PZ) and Transition Zone (TZ) of the prostate on T2-weighted MRI Images.


Dataset:
msd_prostate_01-t2
msd_prostate_01-adc</source>
        <extracomment>9_TextBox_1</extracomment>
        <translation>Segmentation assistée par IA de la zone périphérique (PZ) et de la zone de transition (TZ) de la prostate sur des images IRM pondérées en T2.


Jeux de données&#xa0;:
msd_prostate_01-t2
msd_prostate_01-adc</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="46"/>
        <source>Click on Add Data in the Welcome to Slicer module

Click on Choose Directory to Add and browse to the location of the Slicer datasets

Select the dataset3_ProstateMRI and click on Open</source>
        <extracomment>10_TextBox_1</extracomment>
        <translation type="vanished">Sélectionner le modèle Brain Tumor Segmentation
(BRATS) GLI</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="48"/>
        <source>Slicer loads the prostate MRI dataset</source>
        <extracomment>11_TextBox_0</extracomment>
        <translation type="vanished">Saisissez les volumes d’entrée comme suit&#xa0;:
Volume T2F d’entrée&#xa0;: BraTS-GLI_00005-000-t12f
Volume T1C d’entrée&#xa0;: BraTS-GLI_00005-000-t1c
Volume T1N d’entrée&#xa0;: BraTS-GLI_00005-000-t1n
Volume T2W d’entrée&#xa0;: BraTS-GLI_00005-000-t2w
Cliquez sur Create new Segmentation dans Apply
Cliquez sur Apply pour démarrer la segmentation</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="50"/>
        <source>Click on Welcome to Slicer in the Modules&apos; menu and browse to the category Segmentation

Select the MONAIAuto3DSeg module</source>
        <extracomment>12_TextBox_0</extracomment>
        <translation type="vanished">Slicer commence l’exécution de la tâche d’inférence</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="52"/>
        <source>Enter the model&apos;s name Prostate in the Segmentation model menu</source>
        <extracomment>13_TextBox_0</extracomment>
        <translation>Saisissez le nom du modèle Prostate dans le menu Segmentation model</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="54"/>
        <source>Select the model Prostate - Multisequence</source>
        <extracomment>13_TextBox_1</extracomment>
        <translation type="finished">Sélectionner le modèle Prostate - Multiséquence</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="56"/>
        <source>Enter the Input T2 volume msd-prostate-01-t2 and the Input ADC volume msd-prostate-01-adc</source>
        <extracomment>14_TextBox_0</extracomment>
        <translation type="vanished">Dans le module Add DICOM Data, sélectionnez le patient patient1 et double-cliquez sur l’image CT_Thorax_Abdomen pour la charger dans Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="58"/>
        <source>Click on Create new segmentation on Apply</source>
        <extracomment>14_TextBox_1</extracomment>
        <translation>Cliquez sur Créer une nouvelle segmentation puis sur Appliquer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="60"/>
        <source>Slicer starts the inference</source>
        <extracomment>15_TextBox_0</extracomment>
        <translation type="finished">Slicer démarre l’inférence</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="62"/>
        <source>Slicer shows the results of the AI-based prostate segmentation</source>
        <extracomment>16_TextBox_0</extracomment>
        <translation type="vanished">Sélectionnez le volume d’entrée 6&#xa0;: CT_Thorax_Abdomen
Cliquez sur Create new Segmentation dans Apply 
Cliquez sur Apply pour démarrer la segmentation</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="64"/>
        <source>AI Segmentation Task #2: Brain Glioma</source>
        <extracomment>17_TextBox_0</extracomment>
        <translation>Segmentation IA Tâche #2&#xa0;: Gliome cérébral</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="66"/>
        <source>AI-based Segmentation of Neoplasm, Necrosis and Edema in Brain MRI images.


Datasets:
1) BraTS-GLI_00005-000-t1n (T1-weighted)
2) BraTS-GLI_00005-000-t1c (T1-weighted post-Gd)
3) BraTS-GLI_00005-000-t2w (T2-weighted)
4) BraTS-GLI_00005-000-t2f (T2-FLAIR )</source>
        <extracomment>18_TextBox_1</extracomment>
        <translation>Segmentation assistée par IA des néoplasmes, de la nécrose et de l’œdème dans les images IRM cérébrales.


Jeux de données&#xa0;:
1) BraTS-GLI_00005-000-t1n (pondérée en T1)
2) BraTS-GLI_00005-000-t1c (pondérée en T1 post-Gd)
3) BraTS-GLI_00005-000-t2w (pondérée en T2)
4) BraTS-GLI_00005-000-t2f (T2-FLAIR)</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="68"/>
        <source>Click on Add Data in the Welcome to Slicer module

Click on Choose File(s) to Add and browse to the location of the Slicer datasets

In the subdirectory dataset4_BrainMRI_Glioma, select the four datasets BraTS-GLI-00006-t1c.nii.gz, BraTS-GLI-00006-t1n.nii.gz, BraTS-GLI-00006-t2f.nii.gz, BraTS-GLI-00006-t2w.nii.gz

Click on Open</source>
        <extracomment>19_TextBox_1</extracomment>
        <translation>Cliquez sur Ajouter données dans le module Bienvenue sur Slicer.

Cliquez sur Choisir Fichier(s) à Ajouter et naviguez jusqu’à l’emplacement des jeux de données Slicer.

Dans le sous-répertoire dataset4_BrainMRI_Glioma, sélectionnez les quatre jeux de données&#xa0;: BraTS-GLI-00006-t1c.nii.gz, BraTS-GLI-00006-t1n.nii.gz, BraTS-GLI-00006-t2f.nii.gz, BraTS-GLI-00006-t2w.nii.gz.

Cliquez sur Ouvrir</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="70"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Brain Tumor Segmentation in the Segmentation model menu</source>
        <extracomment>20_TextBox_0</extracomment>
        <translation>Sélectionnez le module MONAIAuto3DSeg et saisissez le nom du modèle Brain Tumor Segmentation dans le menu Segmentation model</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="72"/>
        <source>Select the model Brain Tumor Segmentation (BRATS) GLI</source>
        <extracomment>20_TextBox_1</extracomment>
        <translation>Sélectionnez le modèle Brain Tumor Segmentation (BRATS) GLI</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="74"/>
        <source>Enter the input volumes as follows:

Input T2F volume: BraTS-GLI_00005-000-t2f
Input T1C volume: BraTS-GLI_00005-000-t1c
Input T1N volume: BraTS-GLI_00005-000-t1n
Input T2W volume: BraTS-GLI_00005-000-t2w


Click on Create new Segmentation on Apply

Click on Apply to start the segmentation</source>
        <extracomment>21_TextBox_0</extracomment>
        <translation>Saisissez les volumes d’entrée comme suit&#xa0;:

Volume T2F&#xa0;: BraTS-GLI_00005-000-t2f
Volume T1C&#xa0;: BraTS-GLI_00005-000-t1c
Volume T1N&#xa0;: BraTS-GLI_00005-000-t1n
Volume T2W&#xa0;: BraTS-GLI_00005-000-t2w


Cliquez sur Créer une nouvelle segmentation

Cliquez sur Appliquez pour lancer la segmentation</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="76"/>
        <source>Slicer starts running the inference task

Once the segmentation is done, &apos;Processing finished&apos; appears in the Slicer GUI</source>
        <extracomment>22_TextBox_1</extracomment>
        <translation>Slicer commence l’exécution de la tâche d’inférence

Une fois la segmentation terminée, Processing finished apparaît dans l’interface de Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="78"/>
        <source>Click on Show 3D to display the 3D segments in the 3D Viewer</source>
        <extracomment>23_TextBox_1</extracomment>
        <translation>Cliquez sur Affichage 3D pour afficher les segments 3D dans le visionneur 3D</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="80"/>
        <source>AI Segmentation Task #3: Whole Body Segmentation</source>
        <extracomment>24_TextBox_0</extracomment>
        <translation>Segmentation IA tâche #3&#xa0;: Segmentation du corps entier</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="82"/>
        <source>AI-based Segmentation of the whole body.


Dataset:
CT_ThoraxAbdomen</source>
        <extracomment>25_TextBox_1</extracomment>
        <translation>Segmentation assistée par IA de l’ensemble du corps.


Jeu de données&#xa0;: 
CT_ThoraxAbdomen</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="84"/>
        <source>In the Add DICOM Data module, select the Patient patient1 and double click onthe image CT_Thorax_Abdomen to load it in Slicer</source>
        <extracomment>26_TextBox_0</extracomment>
        <translation>Dans le module Ajouter Données DICOM, sélectionnez le patient patient1 et double-cliquez sur l’image CT_Thorax_Abdomen pour la charger dans Slicer</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="86"/>
        <source>Select the module MONAIAuto3DSeg and enter the model&apos;s name Whole Body Segmentation in the Segmentation model menu</source>
        <extracomment>27_TextBox_0</extracomment>
        <translation>Sélectionnez le module MONAIAuto3DSeg et saisissez le nom du modèle Whole Body Segmentation dans le menu Segmentation model</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="88"/>
        <source>Select the model Whole Body Segmentation TS1-quick</source>
        <extracomment>27_TextBox_1</extracomment>
        <translation>Sélectionnez le modèle Whole Body Segmentation TS1-quick</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="90"/>
        <source>Select the input Volume 6:CT_Thorax_Abdomen,

Click on Create new Segmentation on Apply

Click on Apply to start the segmentation</source>
        <extracomment>28_TextBox_0</extracomment>
        <translation>Sélectionnez le volume d’entrée 6&#xa0;: CT_Thorax_Abdomen,

Cliquez sur Créer une nouvelle segmentation

Cliquez sur Appliquez pour lancer la segmentation</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="92"/>
        <source>Slicer displays the results of the AI-based segmentation using the Whole Body Segmentation TS1-quick</source>
        <extracomment>29_TextBox_0</extracomment>
        <translation>Slicer affiche les résultats de la segmentation assistée par IA en utilisant le modèle Whole Body Segmentation TS1-quick</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="94"/>
        <source>Conclusion</source>
        <extracomment>30_TextBox_0</extracomment>
        <translation>Conclusion</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="96"/>
        <source>The 3D Slicer MONAIAuto3DSeg extension provides fast AI-based segmentation of anatomical and pathological structures.


The module can run on standard laptop and desktop computers with no GPU.</source>
        <extracomment>30_TextBox_1</extracomment>
        <translation>L’extension MONAIAuto3DSeg de 3D Slicer permet une segmentation rapide assistée par IA des structures anatomiques et pathologiques.


Le module peut fonctionner sur des ordinateurs portables et de bureau standards, sans GPU.</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="98"/>
        <source>Acknowledgements</source>
        <extracomment>31_TextBox_0</extracomment>
        <translation type="finished">Remerciements</translation>
    </message>
    <message>
        <location filename="text_dict_default.json" line="100"/>
        <source>The 3D Slicer internationalization project and the 3D Slicer for Latin America project have been made possible through funding by the Chan Zuckerberg Initiative.</source>
        <extracomment>31_TextBox_1</extracomment>
        <translation>Le projet d’internationalisation de 3D Slicer et le projet 3D Slicer pour l’Amérique latine ont été rendus possibles grâce au financement de la Chan Zuckerberg Initiative.</translation>
    </message>
</context>
</TS>
