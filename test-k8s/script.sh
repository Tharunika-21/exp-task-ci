#!/bin/bash
end()
    {
        exit
    }

creating()
{
    echo "creating namespace"
    kubectl create ns tharu

    echo "deploying"
    kubectl apply -n tharu -f app-dp.yml
    kubectl apply -n tharu -f mongo-dp.yml
    kubectl apply -n tharu -f server-dp.yml
    kubectl apply -n tharu -f sts.yml
    kubectl apply -n tharu -f pv.yml
    kubectl apply -n tharu -f pvc.yml
    kubectl apply -n tharu -f app-svc.yml
    kubectl apply -n tharu -f mongo-svc.yml
    kubectl apply -n tharu -f server-svc.yml

    echo "finally press ctl+c"

    

}

while : 
do 
    echo "choice selection"
    echo " "
    echo "creating Infrastructure : 1"
    echo " "
    echo "exit() : 2"
    echo " "
    read -p "value : " my
    echo " "

    if [[ $my -eq 1 ]]
    then 
        creating
        echo "running"
    elif (($my==2))
    then
        end
        echo "not "
    fi 
done
