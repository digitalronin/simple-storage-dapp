from brownie import config, network, SimpleStorage
from scripts.utils import get_account
import os
import shutil


def main():
    account = get_account()
    msg = "Initial message"
    deploy_simple_storage(msg, account)
    copy_contract_data_to_frontend()


def deploy_simple_storage(msg, account):
    ntwrk = config["networks"][network.show_active()]

    ss = SimpleStorage.deploy(
        msg,
        {"from": account},
        publish_source=ntwrk.get("verify", False)
    )

    return ss


def copy_contract_data_to_frontend():
    copy_folders_to_frontend("./build", "./frontend/src/contract-data")


def copy_folders_to_frontend(src, dest):
    if os.path.exists(dest):
        shutil.rmtree(dest)
    shutil.copytree(src, dest)
